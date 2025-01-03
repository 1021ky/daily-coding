require 'net/http'
require 'uri'

module 'PokeAPI'
  GENERATION_URL = 'https://pokeapi.co/api/v2/generation/'.freeze



  class PokeAPIClient
    READ_TIMEOUT = 5
    CONNECT_TIMEOUT = 5
    MAX_RETRY_TIMES = 3

    def initialize(timeout: {read: READ_TIMEOUT, connect: CONNECT_TIMEOUT}, retry_count: RETRY_COUNT)

    end
  end

end