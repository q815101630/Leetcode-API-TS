interface HttpRequestOptions {
    method?: string;
    url: string;
    referer?: string;
    resolveWithFullResponse?: boolean;
    form?: any;
    body?: any;
}

interface GraphQLRequestOptions {
    origin?: string;
    referer?: string;
    query: string;
    variables?: object;
}

interface Credit {
    session?: string;
    csrfToken: string;
}

enum ProblemStatus {
    "Accept",
    "Not Accept",
    "Not Start"
}

enum ProblemDifficulty {
    "Easy" = 1,
    "Medium",
    "Hard",
}

enum SubmissionStatus {
    "Accepted",
    "Compile Error",
    "Wrong Answer",
    "Time Limit Exceeded",
}

export { HttpRequestOptions, GraphQLRequestOptions, Credit, ProblemStatus, ProblemDifficulty, SubmissionStatus, };
