# frozen_string_literal: true

require 'faraday'

class BingApiClient
  URL = 'https://httpbingo.org'
  GET_PATH = '/get'
  IP_PATH = '/ip'
  def initialize(http_client)
    @http_client = http_client
  end

  def ip
    send_request {@http_client.get(GET_PATH)}
  end

  def send_request(retry_count: 3, &block)
    (1 + retry_count).times do
      response = yield
      status = response.status
      case status
      when 200
        return response.body
      when 429, 500..599
        sleep 0.5
        next
      else
        raise StandardError, 'Request failed.'
      end
    end
  end
end

if __FILE__ == $0
  http_client = Faraday.new(url=BingApiClient::URL)
  bing_api_client = BingApiClient.new http_client
  pp bing_api_client.ip
end