require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module WdiRadioApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    #code from stackoverflow/ works for get request but not post
    config.action_dispatch.default_headers = {
    'Access-Control-Allow-Origin' => 'http://localhost:8080',
    'Access-Control-Request-Method' => %w{GET POST PUT DELETE OPTIONS}.join(",")
    }

    # From grumblr factory lesson
  # config.active_record.raise_in_transactional_callbacks = true

  #   config.middleware.insert_before 0, "Rack::Cors" do
  #     allow do
  #       origins '*'
  #       resource '*', :headers => :any, :methods => :any
  #     end
  #   end


    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
