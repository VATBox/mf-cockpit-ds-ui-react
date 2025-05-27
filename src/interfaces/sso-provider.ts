export interface OidcSsoConfiguration extends BaseSsoConfiguration {
    type: 'OIDC';
    clientId: string;
    clientSecret?: string;
    attributesRequestMethod: 'GET' | 'POST';
    oidcIssuer: string;
    authorizeScopes: string;
}

export interface SamlSsoConfiguration extends BaseSsoConfiguration {
    type: 'SAML'
    metadataUrl: string;
}

export interface InvalidSsoConfiguration extends BaseSsoConfiguration {
    type: 'INVALID';
    error: string;
}

export interface BaseSsoConfiguration {
    type: string;
    name: string;
    slug: string;
    accountId: number;
    domains: string[];
}

export type SsoConfiguration = OidcSsoConfiguration | SamlSsoConfiguration | InvalidSsoConfiguration;

export const TypeOfProviders = {
    OIDC: "OIDC",
    SAML: "SAML",
} as const;