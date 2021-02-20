---
title: DevSecOps - It's fancy, but essential
description: Article explaining the concept of DevSecOps and how it can influence your way of developing. I wrote this article after visiting jSpring 2018. It was first published on my [LinkedIn page](https://www.linkedin.com/pulse/devsecops-its-fancy-essential-jens-kooij/ "Original article on LinkedIn").
tags: post
---
## What is DevSecOps?
DevSecOps is a fancy new term for when you're talking about security in DevOps. When working in a DevOps setting, deliverables are mostly feature critical, with barely any thought on security. Just to give an illustration on what kind of impact this can have on your projects, let's have a look at the amount of code you actually use in a project, when you're developing with an aim for features.

## How big is the impact?
My open source content management system called Cloud Control consists of roughly 15k lines of code, whereas the sum of the lines of code for the dependencies totals at around 133 thousand. This means that for this project, only 11% of code is written specifically for this project. For most projects, it's only this code that gets reviewed and tested regularly, be it through continuous integration, unit tests or whatever other safety measures you have built-in into your DevOps pipeline.

Now this only goes for me, as a contributor of this project. If you're just building a website using [Cloud Control](https://getcloudcontrol.org/ "Cloud Control"), the percentage will again be A LOT less. For example, the Cloud Control public website is obviously built with the system as it's backend. This implementation consists of roughly one thousand lines of code. (three quarters of that code is made up of the template files for the presentation). This means that 1k of 150k lines is actually written for that specific website. That is 0.7%!! This means that 99.3% of the code that is used to create the website could potentially contain a security vulnerability without the creator even knowing.

> 99.3% of the code that is used to create the website could potentially contain a security vulnerability without the creator even knowing

![0](//images.ctfassets.net/s0m3943n5459/17CArhPKAq2cKiQe0MCYMC/cc32301d49d68fd8110b0bb1feab14b0/0)This is where DevSecOps comes into play. I recently visited [jSpring](https://jspring.nl/ "jSpring conference website"), a java conference organized by the Dutch java user group, where I attended a talk by [Simon Maple](https://twitter.com/sjmaple "Simon Maple on Twitter") from Snyk.io. He was there to talk about common vulnerabilities and obviously he showed off the Snyk.io platform. It's a tool that scans the dependencies of your project for known vulnerabilities. This is an great example of a tool you can include in your stack to make sure you don't use dependencies that have known security holes.

## Conclusion
I think this shows that having a strategy to stay on top of your security game is essential to have in any modern development environment. Whether you're working on a open source project or on the next major product release for a client, including automated security measures into your software development life cycle is a good place to stay secure.