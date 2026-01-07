# frozen_string_literal: true

require 'net/http'
require 'uri'
require 'json'

module PokeAPI
  BASE_URL = 'https://pokeapi.co'
  GENERATION_PATH = '/api/v2/generation/'

  class Client
    READ_TIMEOUT = 5
    READ_MAX_RETRIES = 3
    CONNECT_TIMEOUT = 5
    CONNECT_MAX_RETRIES = 3

    def initialize(timeout: { read: READ_TIMEOUT, connect: CONNECT_TIMEOUT },
                   max_retries: { READ: READ_MAX_RETRIES, CONNECT: CONNECT_MAX_RETRIES })
      @timeout = timeout
      @max_retry_times = max_retries
    end

    def get_generations
      send_get_request(GENERATION_PATH)
    end

    private

    def https_session
      url = URI.parse(BASE_URL)
      session = Net::HTTP.new(url.host, url.port)
      session.use_ssl = true
      session.open_timeout = CONNECT_TIMEOUT
      session.read_timeout = READ_TIMEOUT
      session
    end

    def calc_wait_time(retry_count)
      base = 2**retry_count
      jitter = rand(-0.5..0.5)
      base + jitter
    end

    def send_get_request(path)
      read_retry_count = 1
      connect_retry_count = 1
      https_session.start do |session|
        res = session.get(path)
        if res.is_a? Net::HTTPBadRequest
          p 'リクエストパラメータを間違えている'
          raise PokeAPIError
        elsif res.is_a? Net::HTTPTooManyRequests
          p '送る頻度が高すぎる'
          raise PokeAPIError
        elsif !res.is_a?(Net::HTTPSuccess)
          p '想定外のエラーが発生した'
          raise PokeAPIError
        end
        return parse_body(res.body)
      rescue Net::OpenTimeout
        connect_retry_count += 1
        if connect_retry_count <= @max_retry_times['CONNECT']
          wait_time = calc_wait_time(connect_retry_count)
          sleep(wait_time)
          retry
        else
          p 'connect timeout'
          raise PokeAPIError
        end
      rescue Net::ReadTimeout
        read_retry_count += 1
        if read_retry_count <= @max_retry_times['READ']
          wait_time = calc_wait_time(read_retry_count)
          sleep(wait_time)
          retry
        else
          p 'read timeout'
          raise PokeAPIError
        end
      rescue Net::HTTPServerError
        raise PokeAPIError
      end
    end

    def parse_body(body)
      JSON.parse(body)
    end
  end

  class PokeAPIError < StandardError
  end
end
