# frozen_string_literal: true

require './pokeapi_client'

def main
  client = PokeAPI::Client.new
  pp client.get_generations
end

main if __FILE__ == $PROGRAM_NAME
