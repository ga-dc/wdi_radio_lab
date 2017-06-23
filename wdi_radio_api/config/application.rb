require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WdiRadioApi
  class Application < Rails::Application

    # headers['Access-Control-Allow-Origin'] = '*'
    # headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    # headers['Access-Control-Request-Method'] = '*'
    # headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    config.middleware.insert_before 0, Rack::Cors do
         allow do
           origins '*'
           resource '*', :headers => :any, :methods => [:get, :post, :put, :patch, :delete, :options]
         end
       end

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
