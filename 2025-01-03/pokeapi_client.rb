# frozen_string_literal: true

require 'net/http'
require 'uri'
require 'json'

module PokeAPI
  BASE_URL = 'https://pokeapi.co/api/v2/'
  GENERATION_URL = "#{BASE_URL}/generation/"

  class Client
    READ_TIMEOUT = 5
    CONNECT_TIMEOUT = 5
    MAX_RETRIES = 3

    def initialize(timeout: { read: READ_TIMEOUT, connect: CONNECT_TIMEOUT }, max_retries: MAX_RETRIES)
      @timeout = timeout
      @max_retry_times = max_retries
    end

    def get_generations
      send_request(GENERATION_URL)
    end

    private

    def send_request(url)
      uri = URI.parse(url)
      response = Net::HTTP.get_response(uri)
      return unless response.is_a?(Net::HTTPSuccess)

      parse_body(response.body)
    end

    def parse_body(body)
      JSON.parse(body)
    end
  end
end
