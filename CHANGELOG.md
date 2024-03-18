# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Config module for standardized and abstract pydantic settings (`kyotsu.config`)
  - Reusable `BaseSettings` class, preconfigured for standardized nested models
  - Generic Abstract `DBConnection` model for Database Connections
  - Standardized nested models for Database Connections: `RedisConnection`,
    `PostgresConnection`, `OpenSearchNoCertConnection`
  - Generic Abstract `HttpService` and `GrpcService` models for service routing
