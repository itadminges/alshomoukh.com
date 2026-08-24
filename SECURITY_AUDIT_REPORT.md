# Application Security Audit Report

**Application:** Al Shomoukh International Private School public website  
**Assessment date:** 2026-08-24  
**Assessment type:** Source-assisted, safe and non-destructive review  
**Result after remediation:** No known dependency advisories and no unresolved high- or critical-severity source findings in the reviewed repository

## Executive summary

The reviewed repository is a statically prerendered Next.js public information site. It does not contain application API routes, server actions, authentication, authorization, a database client, administrative or user areas, file uploads, payment processing, SMTP delivery, webhooks, or server-side form handlers. The contact and campus-tour forms prepare a `mailto:` URL in the visitor's browser; the visitor must review and send the message in their own email application.

Four vulnerable dependency groups were confirmed by the live npm advisory service. The affected direct dependency was Next.js 16.2.0, with vulnerable transitive versions of PostCSS, Sharp, and Nano ID. These were upgraded and both lockfiles were synchronized. Security response headers, CSP, iframe restrictions, bounded form inputs, `mailto:` subject normalization, safe JSON-LD serialization, removal of an unnecessary raw-HTML sink, cookie attributes, and a narrower remote-image allowlist were also implemented.

After remediation, lint, TypeScript checking, the production build, live npm audit, and localhost production-header checks all passed.

## Scope and architecture

### Technology and deployment characteristics

- Next.js App Router 16.3.2, React and React DOM 19.2.4, TypeScript 5.7.3.
- Twenty public, statically prerendered routes, including the home, informational, admissions, contact, privacy, and terms pages.
- Standard Next.js production server/build output; Vercel Analytics is integrated, but no repository-owned hosting manifest or infrastructure-as-code defines the actual production platform.
- No API route files, middleware/proxy, server actions, custom server, backend service, database/ORM, object storage, email service, or secrets-based integration exists in this repository.
- External services/resources: Vercel Analytics, Google Maps embed, the external Parent Portal, social networks, school/affiliate websites, and allowlisted remote images from `www.alshomoukh.com`.

### Request and sensitive-data flow

```text
Browser
  -> Next.js/CDN: static HTML, JS, CSS, fonts, and image optimization
  -> Vercel Analytics: aggregate usage telemetry
  -> Google Maps: sandboxed cross-origin iframe on /contact
  -> External links: Parent Portal, social networks, and affiliates
  -> Contact/tour forms: browser FormData -> encoded mailto URI -> local email client
       -> school mailbox only if the visitor explicitly sends the prepared email
```

No personal data entered into the two forms is posted to, logged by, or stored in this application. Once a visitor sends an email or enters the Parent Portal, handling occurs outside this repository and outside this audit's technical boundary.

### Trust boundaries and threat model

Assets include site integrity, visitor privacy, school reputation, availability, and any personal information a visitor elects to place in an email draft. Primary attackers are unauthenticated internet users, malicious third-party content/providers, dependency supply-chain attackers, and an attacker attempting browser-side content injection.

Important trust boundaries are the browser-to-site origin, the Next.js image optimizer to the remote-image allowlist, the site to Vercel Analytics, the sandboxed Google iframe, external navigation to the Parent Portal/social sites, and the browser-to-local-email-client handoff. There is no application-owned identity, authorization, data, database, upload, or payment boundary in this repository.

## Findings and remediation

| ID | Original severity | Finding | Remediation and status |
|---|---:|---|---|
| SEC-001 | High | Next.js 16.2.0 and transitive PostCSS, Sharp, and Nano ID packages matched current advisories, including availability, SSRF, authorization-bypass, XSS, cache, path disclosure, and native image-processing issues. | Upgraded Next.js to 16.3.2 and PostCSS to 8.5.26; resolved Sharp 0.35.3 and a patched Nano ID transitively; synchronized npm and pnpm lockfiles. Live `npm audit` now reports 0 vulnerabilities. **Fixed.** |
| SEC-002 | Medium | The application did not define browser security response headers. This left clickjacking, MIME sniffing, referrer leakage, capability abuse, and content injection without defense-in-depth controls. | Added CSP, HSTS, `frame-ancestors`, legacy `X-Frame-Options`, `nosniff`, strict referrer policy, Permissions Policy, COOP, HTTPS upgrades, and disabled the framework-identifying header. Verified on production responses for `/` and `/contact`. **Fixed.** |
| SEC-003 | Low | The Google Maps iframe was not sandboxed and lacked a title. | Restricted the frame with a minimum practical sandbox, retained a strict referrer policy, and added an accessible title. CSP limits frames to Google Maps. **Fixed.** |
| SEC-004 | Low | User-controlled contact subjects could contain line breaks before being placed into a `mailto:` URI, and form values were unbounded. The URI was encoded, but client-specific mail-handler behavior makes explicit normalization prudent. | Removed CR/LF from the subject, bounded the subject, and added appropriate length limits to all contact and tour inputs. **Fixed.** |
| SEC-005 | Low | JSON-LD used a raw HTML sink without explicit HTML-significant escaping. A reusable chart component also used raw HTML for a style element. Neither sink currently received visitor input. | Escaped `<` and JavaScript line separators in serialized JSON-LD and replaced the chart raw-HTML sink with React text content. **Fixed.** |
| SEC-006 | Informational | A non-sensitive sidebar preference cookie lacked `SameSite` and `Secure`. | Added `SameSite=Lax` and conditionally adds `Secure` on HTTPS. It cannot be `HttpOnly` because it is intentionally written by client code and carries no identity or authorization data. **Fixed.** |
| SEC-007 | Informational | The Next.js remote-image allowlist included an unused Unsplash hostname, increasing the image proxy's permitted outbound surface. | Removed the unused hostname; only the school-controlled remote image host remains. **Fixed.** |

## OWASP Top 10 and ASVS-oriented assessment

| Area | Verification against implementation | Result |
|---|---|---|
| Broken Access Control | Enumerated App Router files and searched for route handlers, server actions, middleware/proxy, protected functions, identifiers, roles, and data operations. The repository has only public static pages and no protected object/function boundary. The linked Parent Portal is a separate system. | Not applicable in this repository; external portal requires its own audit. |
| Security Misconfiguration | Reviewed Next.js config, headers, image allowlist, external frames/links, cookies, environment ignore rules, production build, and error behavior. Missing hardening controls were implemented and verified. | Remediated. |
| Software Supply Chain | Inspected package manifests and both lockfiles, checked the installed dependency graph, queried the live npm advisory service, upgraded affected packages, and re-audited. | Remediated; 0 known advisories at verification time. |
| Cryptographic Failures | No passwords, tokens, encrypted records, TLS termination code, or cryptographic implementation exists here. HTTPS is reinforced with HSTS and insecure-resource upgrades. | Application controls verified; certificate/TLS edge configuration remains external. |
| Injection | Searched for database/command/template/XML/LDAP execution, dynamic queries, process execution, raw DOM APIs, URL-derived rendering, and server-side fetches. No such backend sinks exist. React escapes rendered content; raw sinks were reviewed and hardened. | No exploitable source finding identified. |
| Insecure Design | Mapped data flows and confirmed that forms do not silently transmit personal data. Third-party boundaries are visible in source and privacy text. Remote fetching is restricted to an explicit HTTPS hostname. | No high-risk design issue identified in this repository. |
| Authentication Failures | No login, logout, registration, password reset, verification, MFA, session, OAuth, remember-me, or authentication API is implemented. | Not applicable; Parent Portal is out of scope. |
| Software/Data Integrity Failures | Dependencies are integrity-pinned by lockfiles; no dynamic plugin loading, update mechanism, deserialization, CI workflow, or webhook exists. Two package-manager lockfiles are currently kept synchronized. | No active finding; standardize on one package manager when deployment ownership is confirmed. |
| Logging and Alerting Failures | No sensitive server operation, authentication event, database action, or application API exists to log. Client code does not log secrets or form contents. Hosting/WAF/CDN logs and alerts are not repository-defined. | Application scope acceptable; operational verification required externally. |
| Mishandling Exceptional Conditions | Static routes use framework error handling. No backend transaction or sensitive failure path exists. The only asynchronous tour transition logs a generic warning and no personal data. | No exploitable source finding identified. |

Relevant OWASP ASVS control families reviewed include architecture/threat modeling, input validation and encoding, browser security, malicious code, business logic, files/resources, API/web services, configuration, data protection, communications, and dependency management. Authentication, session management, access control, database, upload, and server-side API requirements are not implemented by this repository and must not be inferred to cover the external Parent Portal or school email systems.

## Secret and configuration review

- No `.env` file, private key, credential file, database URL, API key, JWT secret, OAuth secret, SMTP credential, cloud credential, payment secret, or known credential signature was found in the tracked tree.
- A signature-based scan across reachable Git revisions found no matching committed credential.
- `.env*.local`, `.vercel`, build output, and dependency directories are ignored. TypeScript build metadata is now ignored as well.
- No credential was identified that requires a **COMPROMISED / ROTATION REQUIRED** designation.
- This result cannot inspect secrets configured only in a hosting-provider dashboard, CI secret store, mailbox, DNS provider, or external Parent Portal.

## API, identity, data, and storage inventory

- **API endpoints/methods:** none defined by the application. Framework-generated static GET/HEAD delivery and image optimization are the only server-facing behavior found.
- **Authentication/sessions/cookies:** no authentication or session mechanism. One non-sensitive UI preference cookie only.
- **Authorization/roles/IDOR/BOLA:** no protected resources, roles, object identifiers, or mutation endpoints exist.
- **Database/storage:** no database, ORM, query, migration, object-storage, or filesystem write path exists.
- **Uploads/imports/SSRF:** no upload, URL import, proxy, webhook, PDF generation, or metadata fetcher exists. Next Image remote fetching is HTTPS-only and hostname-allowlisted.
- **CORS/CSRF/rate limiting:** no cross-origin or state-changing application endpoint exists, so these controls are not applicable to the current repository.
- **Email:** forms create local email drafts; there is no SMTP/API integration. Actual mailbox controls, retention, spam filtering, and access management are external.

## Verification evidence

- `git diff --check`: passed.
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; all 20 application pages plus the not-found page were statically generated with Next.js 16.3.2.
- Live `npm audit --json`: 0 critical, high, moderate, low, or informational vulnerabilities across 381 dependencies at assessment time.
- Local production smoke check: `/` and `/contact` returned HTTP 200 with the intended CSP, HSTS, clickjacking, MIME, referrer, permissions, and opener headers; `X-Powered-By` was absent.
- Static source scans covered application/configuration files, raw HTML/DOM sinks, network calls, forms, cookies, environment access, server handlers/actions, redirects, command execution, local storage, unsafe URL usage, and known secret signatures.

## Residual risks and operational actions

1. **Audit the Parent Portal separately.** Its authentication, authorization, sessions, user data, APIs, uploads, database, and administrative features are not present here and cannot be assessed from an external link.
2. **Verify production edge configuration.** Confirm TLS policy and certificate renewal, HTTP-to-HTTPS redirects, CDN/WAF rate controls, bot protection, security logging/alerting, backup/restore, deployment permissions, and environment variables in the actual hosting account.
3. **Choose one package manager.** Both npm and pnpm lockfiles are currently patched and synchronized, but a single documented deployment package manager reduces future dependency drift.
4. **Evaluate a nonce-based CSP if the site becomes dynamic.** The present policy must allow inline Next.js bootstrap/style content. With no visitor-controlled HTML and the raw sinks hardened, residual XSS risk is low, but nonces/hashes would provide stronger defense if future CMS or authenticated content is added.
5. **Govern third parties.** Review Vercel Analytics, Google Maps, email, social platforms, remote school media, and the Parent Portal for contracts, privacy, retention, availability, and incident-response obligations.
6. **Re-run security checks continuously.** Run lint, type-check, build, secret scanning, and dependency audit in CI on every change and on a schedule because advisory status changes over time.

## Change summary

- `package.json`, `package-lock.json`, `pnpm-lock.yaml`: patched dependency graph.
- `next.config.mjs`: security headers, disabled framework disclosure, reduced image host allowlist.
- `app/layout.tsx`: hardened JSON-LD serialization.
- `app/contact/page.tsx`: bounded input, subject normalization, sandboxed map.
- `app/book-a-tour/page.tsx`: bounded input.
- `components/ui/chart.tsx`: removed raw HTML style injection sink.
- `components/ui/sidebar.tsx`: strengthened preference cookie attributes.
- `.gitignore`: ignored TypeScript incremental build metadata.

