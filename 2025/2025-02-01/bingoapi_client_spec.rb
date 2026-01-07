# frozen_string_literal: true

require './bingoapi_client'

describe 'BingApiClient' do
  it 'ip リクエストを送ると期待したキーのJSONを返す' do
    # Arrange
    http_client = Faraday.new(BingApiClient::URL)
    bing_api_client = BingApiClient.new http_client
    # Act
    response = bing_api_client.ip
    # Assert
    %w[args method origin headers url].each do |key|
      expect(response).to have_key(key)
    end
  end
end
