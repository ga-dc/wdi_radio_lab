class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception


  before_action :add_allow_credentials_headers

  def add_allow_credentials_headers
    # https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#section_5
    #
    # Because we want our front-end to send cookies to allow the API to be authenticated
    # (using 'withCredentials' in the XMLHttpRequest), we need to add some headers so
    # the browser will not reject the response
    response.headers['Access-Control-Allow-Origin'] = request.headers['Origin'] || '*'
    response.headers['Access-Control-Allow-Credentials'] = 'true'
  end

def options
  head :status => 200, :'Access-Control-Allow-Headers' => 'accept, content-type'
end

  # skip_before_action :verify_authenticity_token, :only => [:update]

  # after_action :set_csrf_cookie
  #
  # def set_csrf_cookie
  #   cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  # end
  #
  # protected
  #
  # # In Rails 4.2 and above
  # def verified_request?
  #   super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  # end


  # before_action :add_cors_headers
  #
  #  def add_cors_headers
  #       origin = request.headers[“Origin”]
  #       unless (not origin.nil?) and (origin == “http://localhost” or origin.starts_with? “http://localhost:“)
  #           origin = “https://your.production-site.org”
  #       end
  #       headers[‘Access-Control-Allow-Origin’] = origin
  #       headers[‘Access-Control-Allow-Methods’] = ‘POST, GET, OPTIONS, PUT, DELETE’
  #       allow_headers = request.headers[“Access-Control-Request-Headers”]
  #       if allow_headers.nil?
  #        #shouldn’t happen, but better be safe
  #           allow_headers = ‘Origin, Authorization, Accept, Content-Type’
  #       end
  #       headers[‘Access-Control-Allow-Headers’] = allow_headers
  #       headers[‘Access-Control-Allow-Credentials’] = ‘true’
  #       headers[‘Access-Control-Max-Age’] = ‘1728000’
  #   end
end
