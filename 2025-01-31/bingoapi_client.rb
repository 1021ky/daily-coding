# frozen_string_literal: true

require 'faraday'

def call_api(retry_count: 3)
  (1 + retry_count).times do
    response = Faraday.get('http://httpbingo.org/json')
    next if response.status != 200

    return JSON.parse response.body
  end
  raise StandardError
end

pp call_api if __FILE__ == $PROGRAM_NAME
