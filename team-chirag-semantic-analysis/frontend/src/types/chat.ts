export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  links?: LinkPreview[];
  analysis?: {
    gaps?: string[];
    learning_path?: string[];
    next_step?: string;
    next_step_explanation?: string;
    next_step_videos?: VideoData[];
    known_topics?: string[];
    mentioned_topics?: string[];
    dynamic?: boolean;
    logged?: boolean;
    small_talk?: boolean;
    graph_based?: boolean;
    error?: string;
    // New learning progression fields
    learning_session_active?: boolean;
    progress_tracking?: boolean;
    topic_completed?: string;
    topic_added_to_profile?: string;
    profile_updated?: boolean;
    path_completed?: boolean;
    mastered_topic?: string;
    final_topic_added?: string;
    progress?: string;
    topic_progression?: boolean;
    awaiting_confirmation?: boolean;
    confirmation_requested?: boolean;
    detailed_explanation_provided?: boolean;
    requested_aspect?: string;
    learning_support?: boolean;
    awaiting_specific_question?: boolean;
    help_options_provided?: boolean;
    general_help_ready?: boolean;
    no_active_topic?: boolean;
    no_active_path?: boolean;
    progress_error?: boolean;
    general_help_request?: boolean;
  };
}

export interface VideoData {
  title: string;
  url: string;
  description: string;
  channel?: string;
  duration?: string;
  views?: string;
}

export interface LinkPreview {
  url: string;
  domain: string;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  badge?: 'YouTube' | 'DSA';
  loading: boolean;
  error: boolean;
}
