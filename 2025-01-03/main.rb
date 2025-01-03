require './pokeapi_client'

def main
  client = PokeAPI::Client.new
  pp client.get_generations
end

if __FILE__ == $0
  main()
end