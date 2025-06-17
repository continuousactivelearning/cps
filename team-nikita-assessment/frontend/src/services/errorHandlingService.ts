//Author:Yeddula Pushkala                Date:13-06-25
interface ErrorLog {
    timestamp: Date;
    type: string;
    context: any;
    severity: 'low' | 'medium' | 'high';
  }
  
  interface EscalationTicket {
    ticketId: string;
    conversationHistory: any[];
    userContext: any;
    priority: 'low' | 'medium' | 'high';
    timestamp: Date;
  }
  
  interface UserContext {
    requestsHuman?: boolean;
    errorCount?: number;
    [key: string]: any;
  }
  
  const calculateSeverity = (errorType: string): 'low' | 'medium' | 'high' => {
    const highSeverityErrors = ['classification_error', 'semantic_init_failure', 'critical_system_failure'];
    const mediumSeverityErrors = ['response_generation_error', 'api_failure', 'low_confidence_classification'];
    
    if (highSeverityErrors.includes(errorType)) {
      return 'high';
    } else if (mediumSeverityErrors.includes(errorType)) {
      return 'medium';
    }
    return 'low';
  };
  
  const calculatePriority = (userContext: UserContext): 'low' | 'medium' | 'high' => {
    if (userContext.requestsHuman || (userContext.errorCount && userContext.errorCount >= 3)) {
      return 'high';
    } else if (userContext.errorCount && userContext.errorCount >= 2) {
      return 'medium';
    }
    return 'low';
  };
  
  const generateTicketId = (): string => {
    return `TICKET_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  
  let errorHistory: ErrorLog[] = [];
  
  const updateErrorHistory = (errorLog: ErrorLog): ErrorLog[] => {
    errorHistory.push(errorLog);
    
    // Keep only last 50 errors to prevent memory issues
    if (errorHistory.length > 50) {
      errorHistory = errorHistory.slice(-50);
    }
    
    return errorHistory;
  };
  
  export const ErrorHandlingService = {
    trackError: (errorType: string, context: any): ErrorLog[] => {
      const errorLog: ErrorLog = {
        timestamp: new Date(),
        type: errorType,
        context,
        severity: calculateSeverity(errorType)
      };
      
      console.warn(`Error tracked: ${errorType}`, { severity: errorLog.severity, context });
      
      return updateErrorHistory(errorLog);
    },
  
    shouldEscalate: (errorHistory: ErrorLog[], userContext: UserContext): boolean => {
      const recentErrors = errorHistory.filter(error => 
        Date.now() - error.timestamp.getTime() < 300000 // 5 minutes
      );
      
      // Escalate if: 3+ errors in 5 minutes, technical issues, or explicit request
      return recentErrors.length >= 3 || 
             recentErrors.some(error => error.severity === 'high') ||
             userContext.requestsHuman === true;
    },
  
    createEscalationTicket: (conversation: any[], userContext: UserContext): EscalationTicket => {
      const ticket: EscalationTicket = {
        ticketId: generateTicketId(),
        conversationHistory: conversation,
        userContext,
        priority: calculatePriority(userContext),
        timestamp: new Date()
      };
      
      console.log(`Escalation ticket created: ${ticket.ticketId}`, {
        priority: ticket.priority,
        timestamp: ticket.timestamp
      });
      
      return ticket;
    },
  
    getErrorHistory: (): ErrorLog[] => {
      return [...errorHistory];
    },
  
    clearErrorHistory: (): void => {
      errorHistory = [];
    }
  };