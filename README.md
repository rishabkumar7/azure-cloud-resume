# azure-cloud-resume
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frishabkumar7%2Fazure-cloud-resume&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Hello! :wave:

This is my resume hosted in Azure. This is part of the [A Cloud Guru Challenge](https://acloudguru.com/blog/engineering/cloudguruchallenge-your-resume-in-azure).

:star:[My Resume](https://resume.rishab.cloud/):star:

## Introduction

Challenges:

- [x] Create a GitHub repo.
- [x] Use HTML and CSS to build the website and store the code in the repo.
- [ ] Add a visitor count to the website.
- [x] Deploy the website to Azure Blob Storage.
- [x] Enable HTTPS and custom domain support.
- [x] Set up GitHub Actions.
- [ ] Write a blog post.

## My Progress

I had already kind of did the AWS challenge which ACloud Guru posted in 2020 (I kind of did it back in 2019), the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). Back then, I was just starting to learn AWS, and I wanted to have a project to show my cloud skills, as I was learning all these new services.
It's fun to do it in Azure 😄

### Storage Account

- Tutorial: [Host a static website on Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)

### Enable HTTPS and custom domain

- Quickstart: [Create an Azure CDN profile and endpoint](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint)
- Tutorial: [Map a custom domain with HTTPS enabled](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal#map-a-custom-domain-with-https-enabled)

### Set up GitHub Action

- Tutorial: [Use GitHub Actions to deploy your static website to Azure storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions)
- This workflow is compromised of 4 tasks:
  - [Checkout](https://github.com/actions/checkout): this will checkout our code, so the workflow can access it.
  - [Azure Login](https://github.com/marketplace/actions/azure-login): this will perform a login to Azure, so we can run commands. This is the `az login` command.
  - [Azure CLI](https://github.com/marketplace/actions/azure-cli-action): this allows us to automate our workflow by executing Azure CLI commands. We'll use this task twice; first to upload our content to the blob storage and after that to purge the CDN endpoint.
- I encountered an issue with the **Purge CDN endpoint** task.
- This is the command to run to purge the CDN endpoint: 
`az cdn endpoint purge --content-paths  "/*" --profile-name "CDN_PROFILE_NAME" --name "CDN_ENDPOINT" --resource-group "RESOURCE_GROUP"`
- The `--profile name` argument is the actual name of the CDN profile resource.
- The `--name` argument is the name of the endpoint, as it appears in the hostname *mywebsite.azureedge.net*.
- When you add an endpoint to your CDN profile, a new resource is created with a long name. This is not the name we should use for our command.
