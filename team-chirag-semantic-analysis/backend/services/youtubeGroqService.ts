/**
 * YouTube Service for TypeScript
 * Replaces Python groq_dsa_yt functionality
 */

import axios from 'axios';
import { VideoRecommendation } from '../types/chat';

export interface YouTubeVideo {
  title: string;
  url: string;
  description?: string;
  channel_name: string;
  duration?: string;
  view_count?: string | number;
}

export class YouTubeFinderService {
  private apiKey: string;
  private baseUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.YOUTUBE_API_KEY || '';
  }

  /**
   * Get videos for a given search term
   */
  public async getVideos(searchTerm: string, maxResults: number = 5): Promise<YouTubeVideo[]> {
    try {
      if (!this.apiKey) {
        console.warn('YouTube API key not found, returning mock videos');
        return this.getMockVideos(searchTerm);
      }

      const searchQuery = `${searchTerm} data structures algorithms tutorial`;
      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          part: 'snippet',
          q: searchQuery,
          type: 'video',
          maxResults: maxResults,
          key: this.apiKey,
          order: 'relevance',
          videoDuration: 'any'
        },
        timeout: 10000 // 10 second timeout
      });

      const videos: YouTubeVideo[] = [];

      for (const item of response.data.items) {
        const video: YouTubeVideo = {
          title: item.snippet.title,
          url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          description: item.snippet.description,
          channel_name: item.snippet.channelTitle,
          duration: 'N/A', // Would need additional API call to get duration
          view_count: 'N/A' // Would need additional API call to get view count
        };
        videos.push(video);
      }

      // Get additional details (duration, views) if needed
      if (videos.length > 0) {
        await this.enrichVideoDetails(videos);
      }

      return videos;

    } catch (error: any) {
      console.error('Error fetching YouTube videos:', error.message);
      return this.getMockVideos(searchTerm);
    }
  }

  /**
   * Enrich video details with duration and view count
   */
  private async enrichVideoDetails(videos: YouTubeVideo[]): Promise<void> {
    try {
      if (!this.apiKey) return;

      const videoIds = videos.map(video => {
        const url = new URL(video.url);
        return url.searchParams.get('v');
      }).filter(id => id !== null);

      if (videoIds.length === 0) return;

      const response = await axios.get(`${this.baseUrl}/videos`, {
        params: {
          part: 'statistics,contentDetails',
          id: videoIds.join(','),
          key: this.apiKey
        },
        timeout: 10000
      });

      for (let i = 0; i < videos.length && i < response.data.items.length; i++) {
        const stats = response.data.items[i]?.statistics;
        const contentDetails = response.data.items[i]?.contentDetails;

        if (stats?.viewCount) {
          videos[i].view_count = parseInt(stats.viewCount);
        }

        if (contentDetails?.duration) {
          videos[i].duration = this.parseDuration(contentDetails.duration);
        }
      }

    } catch (error) {
      console.error('Error enriching video details:', error);
      // Continue without enriched details
    }
  }

  /**
   * Parse YouTube duration format (PT4M13S) to readable format
   */
  private parseDuration(duration: string): string {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = duration.match(regex);

    if (!matches) return 'N/A';

    const hours = parseInt(matches[1] || '0');
    const minutes = parseInt(matches[2] || '0');
    const seconds = parseInt(matches[3] || '0');

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  /**
   * Get mock videos when API is not available
   */
  private getMockVideos(searchTerm: string): YouTubeVideo[] {
    const mockVideos: YouTubeVideo[] = [
      {
        title: `${searchTerm} - Complete Tutorial for Beginners`,
        url: `https://www.youtube.com/watch?v=mock1`,
        description: `Learn ${searchTerm} from scratch with examples and coding exercises.`,
        channel_name: 'DSA Learning Hub',
        duration: '15:30',
        view_count: '125000'
      },
      {
        title: `${searchTerm} Explained - Data Structures & Algorithms`,
        url: `https://www.youtube.com/watch?v=mock2`,
        description: `Comprehensive explanation of ${searchTerm} with practical examples.`,
        channel_name: 'Programming with Passion',
        duration: '22:45',
        view_count: '89000'
      },
      {
        title: `Master ${searchTerm} in One Video`,
        url: `https://www.youtube.com/watch?v=mock3`,
        description: `Everything you need to know about ${searchTerm} in one comprehensive video.`,
        channel_name: 'Code Academy',
        duration: '18:20',
        view_count: '156000'
      }
    ];

    return mockVideos.slice(0, 3); // Return top 3 mock videos
  }

  /**
   * Format videos for frontend consumption
   */
  public formatVideosForFrontend(videos: YouTubeVideo[]): VideoRecommendation[] {
    return videos.map(video => ({
      title: video.title,
      url: video.url,
      description: video.description || `Learn about ${video.title}`,
      channel: video.channel_name,
      duration: video.duration,
      views: video.view_count
    }));
  }
}

/**
 * Groq API Response Generator
 * Replaces Python generate_response functionality
 */
export class GroqResponseService {
  private apiKey: string;
  private baseUrl = 'https://api.groq.com/openai/v1/chat/completions';

  constructor() {
    this.apiKey = process.env.GROQ_API_KEY || '';
  }

  /**
   * Generate response using Groq API
   */
  public async generateResponse(
    prompt: string, 
    systemPrompt: string = "You are a DSA tutor. Provide clear, concise explanations with examples. Be encouraging and educational.",
    maxTokens: number = 750
  ): Promise<string> {
    try {
      if (!this.apiKey) {
        console.warn('GROQ_API_KEY not found, returning fallback response');
        return this.generateFallbackResponse(prompt);
      }

      const response = await axios.post(
        this.baseUrl,
        {
          model: 'mistral-saba-24b', // or another Groq model
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt }
          ],
          max_tokens: maxTokens,
          temperature: 0.7,
          top_p: 0.9
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 second timeout
        }
      );

      const message = response.data.choices?.[0]?.message?.content;
      if (!message) {
        throw new Error('No response content received from Groq API');
      }

      return message.trim();

    } catch (error: any) {
      console.error('Error generating Groq response:', error.message);
      
      if (error.response?.status === 401) {
        console.error('Groq API authentication failed');
      } else if (error.response?.status === 429) {
        console.error('Groq API rate limit exceeded');
      }
      
      return this.generateFallbackResponse(prompt);
    }
  }

  /**
   * Generate fallback response when Groq API is not available
   */
  private generateFallbackResponse(prompt: string): string {
    const promptLower = prompt.toLowerCase();
    
    // Basic keyword-based responses
    if (promptLower.includes('array')) {
      return "Arrays are fundamental data structures that store elements in contiguous memory locations. They provide O(1) access time and are the building blocks for many algorithms.";
    } else if (promptLower.includes('linked list')) {
      return "Linked Lists are dynamic data structures where elements (nodes) are connected via pointers. They offer efficient insertion/deletion but require O(n) traversal time.";
    } else if (promptLower.includes('stack')) {
      return "Stacks follow the Last-In-First-Out (LIFO) principle. They're essential for function calls, expression evaluation, and backtracking algorithms.";
    } else if (promptLower.includes('queue')) {
      return "Queues follow the First-In-First-Out (FIFO) principle. They're used in scheduling, breadth-first search, and buffering operations.";
    } else if (promptLower.includes('tree')) {
      return "Trees are hierarchical data structures with nodes connected by edges. They're fundamental for organizing data efficiently and enable fast search operations.";
    } else if (promptLower.includes('graph')) {
      return "Graphs represent relationships between entities using vertices and edges. They're essential for modeling networks, social connections, and pathfinding.";
    } else if (promptLower.includes('sorting')) {
      return "Sorting algorithms arrange data in a specific order. Common algorithms include bubble sort (O(n²)), merge sort (O(n log n)), and quick sort (average O(n log n)).";
    } else if (promptLower.includes('searching')) {
      return "Searching algorithms find specific elements in data structures. Linear search is O(n) while binary search on sorted data is O(log n).";
    } else {
      return "I'd be happy to help you learn about data structures and algorithms! Could you please specify which topic you'd like to explore?";
    }
  }
}
