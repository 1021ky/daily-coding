require 'net/http'
require 'uri'

class PokeAPIClient

  GENERATION_URL = 'https://pokeapi.co/api/v2/generation/'.freeze


  def initialize(timeout: 5, retry_count: 3, env: "development")
    @timeout=timeout
    @retry_count = retry_count
    @env =env
  end

  def get_generation(id)
    uri = URI.parse(PokeAPIClient::GENERATION_URL+"#{id}/")
    response = Net::HTTP.get_response(uri)
    if response.is_a?(Net::HTTPSuccess)
      return response.body
    else
      return nil
    end
  end
end

def run
  client = PokeAPIClient.new
  result = client.get_generation(1)
  puts result
end

if __FILE__ == $0
  run
end