# frozen_string_literal: true

require 'faraday'

#
# BingAPIのクライアントクラス
#
class BingApiClient
  URL = 'https://httpbingo.org'
  GET_PATH = '/get'
  IP_PATH = '/ip'
  def initialize(http_client)
    @http_client = http_client
  end

  def ip
    JSON.parse(send_request { @http_client.get(GET_PATH) })
  end

  def send_request(retry_count: 3)
    (1 + retry_count).times do
      response = yield
      next if retriable_status?(response.status)

      return response.body
    rescue StandardError => e
      raise StandardError, "Error in sending request: #{e.message}"
    end
  end

  def retriable_status?(status)
    case status
    when 200
      false
    when 429, 500..599
      true
    when 400..499
      false
    else
      raise StandardError, 'unexpected http status'
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  http_client = Faraday.new(BingApiClient::URL)
  bing_api_client = BingApiClient.new http_client
  pp bing_api_client.ip
end
