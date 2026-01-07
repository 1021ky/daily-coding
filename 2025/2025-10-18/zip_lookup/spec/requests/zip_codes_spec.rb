require 'rails_helper'

RSpec.describe "ZipCodes", type: :request do
  shared_context '正常なデータがDBに入っているとき' do
    before do
      ZipCode.bulk_insert([
        {
          zipcode: 5550001,
          pref: '東京都',
          city: '千代田区',
          town: '千代田',
          pref_kana: 'トウキョウト',
          city_kana: 'チヨダク',
          town_kana: 'チヨダ'
        }
      ])
    end

    after do
      ZipCodeAddressFurigana.delete_all
      ZipCodeAddress.delete_all
      ZipCode.delete_all
    end
  end

  describe "GET /zip_codes" do
    include_context '正常なデータがDBに入っているとき'
    it "HTTPステータスコードとJSONが期待通りの値で返ること" do
      get '/zip_codes/show', params: { zip_code: 5550001 }
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq("application/json; charset=utf-8")
      expect(response.parsed_body["zip_code"]).to eq('555-0001')
      expect(response.parsed_body['address']["pref"]).to eq("東京都")
      expect(response.parsed_body['address']["city"]).to eq("千代田区")
      expect(response.parsed_body['address']["town"]).to eq("千代田")
      expect(response.parsed_body['address']["pref_furigana"]).to eq("トウキョウト")
      expect(response.parsed_body['address']["city_furigana"]).to eq("チヨダク")
      expect(response.parsed_body['address']["town_furigana"]).to eq("チヨダ")
      expect(response.parsed_body["update_time"]).not_to be_nil
    end
  end
end
