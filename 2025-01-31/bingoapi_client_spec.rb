require 'rspec'
require 'faraday'
require 'json'
require_relative './bingoapi_client'
require "debug"

describe 'call_api' do
  let(:response_body) { { "slideshow" => { "title" => "Sample Slide Show" } }.to_json }
  let(:response) { instance_double(Faraday::Response, status: 200, body: response_body) }
  let(:badrequest_response) {instance_double(Faraday::Response, status: 429, body: 'too many requests')}

  context 'APIが正常に200をかえすとき' do
    before do
      allow(Faraday).to receive(:get).and_return(response)
    end

    it 'slideshowをTOPレベルのキーとしたJSONが返る' do
      result = call_api
      expect(result).to have_key('slideshow')
    end
  end
  context 'when the API call fails one time' do

    before do
      allow(Faraday).to receive(:get).and_invoke(
        -> (a) { badrequest_response },
        -> (a) { response }
      )
    end

    it 'リトライして成功する' do
      expect(Faraday).to receive(:get).exactly(2).times
      result = call_api(retry_count: 3)
      expect(result).to have_key('slideshow')
    end
  end

  context 'when the API call fails one time' do

    before do
      allow(Faraday).to receive(:get).and_return(badrequest_response,badrequest_response,badrequest_response,badrequest_response)
    end

    it 'リトライして失敗する' do
      expect(Faraday).to receive(:get).exactly(4).times
      expect{call_api(retry_count: 3)}.to raise_error(StandardError)
    end
  end
end
