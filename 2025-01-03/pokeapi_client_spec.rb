# frozen_string_literal: true

require 'minitest/autorun'
require_relative './pokeapi_client'

describe PokeAPI::Client do
  describe '#get_generations' do
    SUCCESS_RESPONSE = {
      count: 9,
      next: nil,
      previous: nil,
      results: [{ name: 'generation-i',
       url: 'https://pokeapi.co/api/v2/generation/1/' },
     { name: 'generation-ii',
       url: 'https://pokeapi.co/api/v2/generation/2/' }]
    }

    def setup
      @client = PokeAPI::Client.new
      @mock_session = Minitest::Mock.new
      @mock_http = Minitest::Mock.new
    end

    [
      { ctx: 'リクエストが200で返るとき',
        response: lambda {
          response = Net::HTTPOK.new(1.1, 200, 'OK')
          def response.read_body
            SUCCESS_RESPONSE.to_json
          end
          response
        },
        expected: SUCCESS_RESPONSE }
    ].each do |test_case|
      it (test_case[:ctx]).to_s do
        @mock_session.expect(:get, test_case[:response].call, [PokeAPI::GENERATION_PATH])
        @mock_http.expect(:start, nil) { |&block| block.call(@mock_session) }
        @mock_http.expect(:use_ssl=, nil, [true])
        @mock_http.expect(:open_timeout=, nil, [Integer])
        @mock_http.expect(:read_timeout=, nil, [Integer])

        Net::HTTP.stub(:new, @mock_http) do
          result = @client.get_generations
          assert_equal JSON.parse(SUCCESS_RESPONSE.to_json), result
        end

        @mock_session.verify
        @mock_http.verify
      end
      # end
    end
  end
end
