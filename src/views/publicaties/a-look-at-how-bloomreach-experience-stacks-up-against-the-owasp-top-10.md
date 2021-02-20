---
title: A look at how BloomReach Experience stacks up against the OWASP top 10
description: An answer to the top 10 security risks, as presented by the OWASP (Open Web Application Security Project) committee. The most recent top-10 dates from 2017 and can be found [here](https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf)
tags: post
---
Having a personal affinity with security is the best motivator of staying up to date with the latest developments on the field of security tools and trends. Incentro enables it's people to attend conferences and seminars to their heart's content and encourages them to write blogs about their passion. For even more in-depth knowledge about security, we won't hesitate to join forces with our partners, like we did with [Onegini](https://www.emerce.nl/wire/samenwerking-incentro-onegini-intelligent-veilig-klantplatform "Incentro and Onegini on Emerce").

Incentro works with a plethora of enterprise corporations in the Netherlands, for whom privacy is an important issue in their service. This triggers us to stay on top of our game. Recently when the new GDPR laws came into force, we advised our clients early on in their strategy for compliance.

Now let's have a look at the OWASP top 10, step by step.

## 1. Injection
Injection means injecting malicious statements into your application, to retrieve data from the database or get access to (parts of) the system. By using the so called HstQuery abstraction for calling the actual underlying database, the CMS prevents external input to be executed directly. Escaping and sanitizing are covered by the HST, which makes injection practically impossible.

## 2. Broken authentication
By default BloomReach has Captcha protection for authenticating the CMS. Furthermore when using the cloud environment they provide, they enable IP whitelisting from the get-go to ensure only the right people can attempt a login. There's also a number of modules available to tighten authentication even further.

The BloomReach cms is also based on Spring Framework, which makes it possible to plug-in the advanced security measures provided by Spring Security. At Incentro we've done this successfully for a number of clients.

## 3. Sensitive Data Exposure
Normally, no personal data is stored in CMS. This means that exposing this data by design is not an issue, in case of any data leak. Even when the personalisation engine of BloomReach - called Relevance - is enabled, no personal data gets stored. This is because Relevance anonymizes all data it collects, making it impossible to route back this information back to a individual. With this data anonymization, it also complies with the GDPR laws that have recently come to effect.

## 4. XML External Entities
For regular use, no external XML files are used when using the CMS in a production environment. In previous versions, importing and exporting content and configuration was done through XML, but since version 12 this has been replaced with YAML.

## 5. Broken Access Control
BloomReach has a built-in user access control system that takes care of authentication and authorisation inside the cms. It is also possible to fully integrate with the most frequently used authorisation (LDAP) packages that are used in the enterprise market, like for example Microsoft Active Directory.

## 6. Security Misconfiguration
Most configuration is properly configured when starting a new project from the Maven archetype. A good example of this is audit logging. By default, when you start a new project, audit logging with the use of Log4j is preconfigured. BloomReach also offers a number of security modules out-of-the-box. Examples are Two-Factor Authentication, Captcha and SSO (single sign-on).

## 7. Cross-Site Scripting
To prevent pages being infected with external scripts, so called Cross-Site Scripting or XSS, Bloomreach has an entire toolkit a it's disposal called HST. HST stands for Hippo Site Toolkit, where Hippo refers to the system's name prior to the acquisition by BloomReach. The HST is a set of tools for developers that takes care of lot's of risky operations like link generation. It automatically filters out malicious attempt of script injection. Apart from XSS, the HST also protects from CRLF (carriage return, line feed) injection, another exploit that is used by attackers. You can read more about this on BloomReach' own site.

## 8. Insecure Deserialization
Generally speaking no user data get deserialized in the BloomReach cms. It's up to the developers to keep in mind the effects of insecure deserialization. They should consider using pure data formats (like XML or better yet JSON) or implementing some form of whitelisting in deserialization methods, so data can only be deserialized to certain classes. The OWASP site also provides a comprehensive guide for developers on how to handle the risks deserialization brings.

## 9. Using Components with Known Vulnerabilities
From time to time, BloomReach lets external parties perform security audits or pentests on its products. For version twelve they let HackerOne take care of this. HackerOne is an initiative of hackers and security researchers that harness the power of an international hacker community to find security vulnerabilities, so they can be patched. The results of these tests showed the product was deemed free of vulnerabilities at the time of testing. Ofcourse the product and specifically the implementations of BloomReach Experience get further developed through time and it's highly recommended to implement some security checks in the development process as well. For example automated code inspection and scanning your dependencies for known vulnerabilities are ways to keep track of the state of security of the stack.

## 10. Insufficient Logging & Monitoring
As mentioned under 6. Security Misconfiguration, BloomReach has audit logging configured by default. This monitors login attempts, which user edits which content or configuration and generates neat logging for each event. These logs are standard compliant, which makes analysis and monitoring with tools like Logstash easy. Next to logging alone, BloomReach also offers different kinds of licensing models and SLA's that take care of incident response, suited to your needs and requirements.

## Conclusion
In general BloomReach Experience is well prepared for handling the most common security vulnerabilities. On the one hand there is a lot of security configuration set-up properly from the get-go and on the other hand there are several possibilities to tighten security even further, by using ready to use modules or signing a service level agreement with BloomReach. The open source nature of the architecture makes it possible to plug-in a security framework like Spring Security to do more of the heavy lifting for you.

As security is a job that's never quite "done", it is entirely possible to stumble upon new vulnerabilities while we're working on a project. At Incentro we aim to work towards maintaining a secure platform throughout our collaboration, so that together we can make sure your site runs on a secure BloomReach stack. If you want to find out more about how we implement BloomReach Experience for our customers, please do get in touch. We'd love to tell you more over coffee!