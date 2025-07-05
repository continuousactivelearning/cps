/**
 * TypeScript type definitions for the Chat System
 * Converted from Python integrated_chat_handler.py
 */

export interface GraphNode {
  id: string;
  name: string;
  type: 'topic' | 'subtopic';
  keywords?: string[];
  parent_topic?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  type?: string;
  weight?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  edges?: GraphEdge[];
}

export interface UserSubtopic {
  name: string;
  id?: string;
  type?: string;
}

export interface UserTopic {
  id: string;
  name: string;
  type: 'topic';
  subtopics: UserSubtopic[];
}

export interface UserProfile {
  knownConcepts?: {
    topics: UserTopic[];
    totalTopics: number;
    totalSubtopics: number;
  };
  userId?: string;
  lastUpdated?: string;
}

export interface ChatMessage {
  content?: string;
  message?: string;
  timestamp?: string;
  role?: 'user' | 'assistant';
}

export interface LearningIntents {
  wants_next_topic: boolean;
  confirms_understanding: boolean;
  needs_more_explanation: boolean;
  wants_to_complete_topic: boolean;
  satisfied_with_topic: boolean;
  wants_confirmation: boolean;
  says_no_need_help: boolean;
}

export interface QueryAnalysis {
  query: string;
  is_small_talk: boolean;
  learning_intent: LearningIntents;
  truly_known_topics: string[];
  known_subtopics: string[];
  mentioned_topics: GraphNode[];
  mentioned_subtopics: GraphNode[];
  is_graph_topic: boolean;
}

export interface LearningGapAnalysis {
  gaps: string[];
  learning_path: string[];
  target_topic?: GraphNode;
  known_concepts: string[];
  suggestions?: string[];
}

export interface VideoRecommendation {
  title: string;
  url: string;
  description: string;
  channel: string;
  duration?: string;
  views?: string | number;
}

export interface LearningSession {
  current_path: string[];
  completed_topics: Array<{
    topic: string;
    completed_at: string;
  }>;
  current_step_index: number;
  target_topic: string | null;
  session_started: string;
  last_updated: string;
}

export interface ChatContext {
  target_topic?: { name: string } | GraphNode;
  gaps?: string[];
  learning_path?: string[];
  known_concepts?: string[];
  is_small_talk?: boolean;
  dynamic_query?: boolean;
  needs_detailed_explanation?: boolean;
  user_confusion?: string;
  requested_aspect?: string;
  current_progress?: string;
}

export interface ChatResponse {
  response: string;
  videos?: VideoRecommendation[];
  analysis: {
    small_talk?: boolean;
    known_topics?: string[];
    gaps?: string[];
    learning_path?: string[];
    next_step?: string;
    next_step_explanation?: string;
    next_step_videos?: VideoRecommendation[];
    mentioned_topics?: string[];
    graph_based?: boolean;
    learning_session_active?: boolean;
    progress_tracking?: boolean;
    dynamic?: boolean;
    logged?: boolean;
    error?: string;
    topic_completed?: string;
    topic_progression?: boolean;
    progress?: string;
    path_completed?: boolean;
    mastered_topic?: string;
    profile_updated?: boolean;
    detailed_explanation_provided?: boolean;
    current_topic?: string;
    requested_aspect?: string;
    learning_support?: boolean;
    no_active_path?: boolean;
    general_help_request?: boolean;
    awaiting_specific_question?: boolean;
    help_options_provided?: boolean;
    general_help_ready?: boolean;
    topic_added_to_profile?: string;
    final_topic_added?: string;
    awaiting_confirmation?: boolean;
    confirmation_requested?: boolean;
    no_active_topic?: boolean;
    progress_error?: boolean;
  };
}

export interface UnknownQuery {
  query: string;
  timestamp: string;
  processed: boolean;
}

export interface UnknownQueriesLog {
  queries: UnknownQuery[];
}

export enum SpecificAspect {
  EXAMPLE = 'example',
  IMPLEMENTATION = 'implementation',
  USE_CASE = 'use_case',
  COMPARISON = 'comparison',
  STEP_BY_STEP = 'step_by_step'
}

export interface MessageRequest {
  message: string;
  chat_history?: ChatMessage[];
  user_id?: string;
}
