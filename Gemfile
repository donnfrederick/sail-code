source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.1"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails", "~> 5.2.5"
# Use mysql as the database for Active Record
gem "mysql2", ">= 0.4.4", "< 0.6.0"
# Use Puma as the app server
gem "puma", "~> 3.11"
# Use SCSS for stylesheets
gem "sass-rails", "~> 5.0"
# Use Uglifier as compressor for JavaScript assets
gem "uglifier", ">= 1.3.0"
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem "mini_racer", platforms: :ruby
gem "active_decorator"

# Use CoffeeScript for .coffee assets and views
gem "coffee-rails", "~> 4.2"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.5"
# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"
gem "redis-rails"
gem "redis-objects"
gem "redis-namespace"

# Use ActiveModel has_secure_password
gem "bcrypt", "~> 3.1.7"

# Use ActiveStorage variant
gem "carrierwave", "~> 1.0"
gem "carrierwave-vips"
gem 'carrierwave-aws'

# User SMS authentication
gem "twilio-ruby", "~> 5.27.1"

# Use Capistrano for deployment
# gem "capistrano-rails", group: :development

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.1.0", require: false

# Soft-delete
gem "paranoia", "~> 2.3", ">= 2.3.1"

# for API
gem "active_model_serializers"
gem "rack-cors"

gem "slim-rails"
gem "will_paginate"
gem "weak_parameters"
gem "attr_encrypted"
gem "concerned_with"
gem "rubyzip", require: "zip"
gem "active_hash", "~> 1.5.3"
gem "config"

gem "whenever", require: false

gem "countries"
gem "tzinfo"
gem "i18n-country-translations"

gem "activerecord-import"

# Push notification
gem "googleauth"
gem "faraday"

# for Helte Admin
gem "activeadmin"
gem "nilify_blanks"
gem "country_select"
gem "devise"
gem "omniauth-google-oauth2"
gem "omniauth-rails_csrf_protection"

gem "prawn"
gem "prawn-table"

# for ElasticBeanstalk development env
gem "listen", ">= 3.0.5", "< 3.2"

# Smooth migration
gem "migration_data"

group :development, :test do
  # Call "byebug" anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "rspec-rails"
  gem "rspec_junit_formatter"
  gem "timecop"
  gem "gimei"
  gem "faker"
  gem "autodoc"
  gem "rubocop", require: false
end

group :development do
  # Access an interactive console on exception pages or by calling "console" anywhere in the code.
  gem "web-console", ">= 3.3.0"
  # gem "listen", ">= 3.0.5", "< 3.2"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "annotate"
  gem "mini_racer"
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# User management system
gem 'bootstrap', '~> 4.1.1'
gem 'jquery-rails'
gem 'fullcalendar-rails'
gem 'momentjs-rails'
gem 'font-awesome-rails'
gem 'bootstrap-will_paginate', '~> 1.0'
gem 'rqrcode'
gem "streamio-ffmpeg", "~> 3.0", ">= 3.0.2"
gem "fileutils"

# Email notifications
gem 'premailer-rails'

# Payment system
gem "stripe"

# Error reporting
gem 'slack_500'
gem 'slack-notifier'

# Analytics report
gem "google-api-client"

# Analysis 
gem 'chartkick'

# Ransack
gem 'ransack'