-- Performance Optimization for Ajay's Catholic Commentary
-- Database indexes and optimizations

-- Posts table optimizations
CREATE INDEX IF NOT EXISTS idx_posts_status_published_at ON posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Comments table optimizations
CREATE INDEX IF NOT EXISTS idx_comments_post_id_status ON comments(post_id, status);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_parent_id ON comments(parent_id);

-- Post categories and tags junction tables
CREATE INDEX IF NOT EXISTS idx_post_categories_post_id ON post_categories(post_id);
CREATE INDEX IF NOT EXISTS idx_post_categories_category_id ON post_categories(category_id);
CREATE INDEX IF NOT EXISTS idx_post_tags_post_id ON post_tags(post_id);
CREATE INDEX IF NOT EXISTS idx_post_tags_tag_id ON post_tags(tag_id);

-- Users table optimizations
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Site settings optimizations
CREATE INDEX IF NOT EXISTS idx_site_settings_key ON "SiteSettings"(key);

-- Feature toggles optimizations
CREATE INDEX IF NOT EXISTS idx_feature_toggles_id ON "FeatureToggle"(id);
CREATE INDEX IF NOT EXISTS idx_feature_toggles_enabled ON "FeatureToggle"(enabled);
CREATE INDEX IF NOT EXISTS idx_feature_toggles_category ON "FeatureToggle"(category);

-- Papal timeline optimizations
CREATE INDEX IF NOT EXISTS idx_popes_papacy_number ON popes(papacy_number);
CREATE INDEX IF NOT EXISTS idx_popes_papacy_start ON popes(papacy_start);
CREATE INDEX IF NOT EXISTS idx_popes_is_current ON popes(is_current);

-- Papal events optimizations
CREATE INDEX IF NOT EXISTS idx_papal_events_pope_id ON papal_events(pope_id);
CREATE INDEX IF NOT EXISTS idx_papal_events_event_date ON papal_events(event_date);
CREATE INDEX IF NOT EXISTS idx_papal_events_event_type ON papal_events(event_type);

-- Papal achievements optimizations
CREATE INDEX IF NOT EXISTS idx_papal_achievements_pope_id ON papal_achievements(pope_id);
CREATE INDEX IF NOT EXISTS idx_papal_achievements_year ON papal_achievements(year);
CREATE INDEX IF NOT EXISTS idx_papal_achievements_category ON papal_achievements(category);

-- Church divisions optimizations
CREATE INDEX IF NOT EXISTS idx_church_divisions_parent_id ON church_divisions(parent_id);
CREATE INDEX IF NOT EXISTS idx_church_divisions_year ON church_divisions(year);

-- Bible manuscripts optimizations
CREATE INDEX IF NOT EXISTS idx_bible_manuscripts_date ON bible_manuscripts(date);

-- Bible translations optimizations
CREATE INDEX IF NOT EXISTS idx_bible_translations_year ON bible_translations(year);
CREATE INDEX IF NOT EXISTS idx_bible_translations_language ON bible_translations(language);

-- Sessions and accounts for NextAuth
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires);
CREATE INDEX IF NOT EXISTS idx_accounts_user_id ON accounts(user_id);
CREATE INDEX IF NOT EXISTS idx_accounts_provider ON accounts(provider, provider_account_id);

-- Verification tokens
CREATE INDEX IF NOT EXISTS idx_verification_tokens_token ON verification_tokens(token);
CREATE INDEX IF NOT EXISTS idx_verification_tokens_identifier ON verification_tokens(identifier);

-- Analyze tables for query optimization
ANALYZE posts;
ANALYZE comments;
ANALYZE users;
ANALYZE categories;
ANALYZE tags;
ANALYZE "SiteSettings";
ANALYZE "FeatureToggle";
ANALYZE popes;
ANALYZE papal_events;
ANALYZE papal_achievements;
ANALYZE church_divisions;
ANALYZE bible_manuscripts;
ANALYZE bible_translations;
ANALYZE sessions;
ANALYZE accounts;
ANALYZE verification_tokens;



