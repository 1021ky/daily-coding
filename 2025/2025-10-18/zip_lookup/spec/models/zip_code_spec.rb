require 'rails_helper'

RSpec.describe ZipCode, type: :model do
  context '渡されたデータが正常な場合' do
    let(:data) do
      [
        {
          zipcode: 1000001,
          pref: '東京都',
          city: '千代田区',
          town: '千代田',
          pref_kana: 'トウキョウト',
          city_kana: 'チヨダク',
          town_kana: 'チヨダ'
        },
        {
          zipcode: 1000002,
          pref: '東京都',
          city: '千代田区',
          town: '皇居外苑',
          pref_kana: 'トウキョウト',
          city_kana: 'チヨダク',
          town_kana: 'コウキョガイエン'
        }
      ]
    end

    context '既存データが存在する場合' do
      before do
        ZipCode.create!(zipcode: '9999999')
        ZipCodeAddress.create!(zip_code_id: ZipCode.first.id, pref: '旧都道府県', city: '旧市区町村', town: '旧町域')
        ZipCodeAddressFurigana.create!(zip_code_id: ZipCode.first.id, pref: 'キュウトドウフケン', city: 'キュウシクチョウソン', town: 'キュウチョウイキ')
      end
      it '既存データが削除されてから新規登録されること' do
        expect { ZipCode.bulk_insert(data) }.to change { ZipCode.count }.by(1)
        expect(ZipCodeAddress.count).to eq(2)
        expect(ZipCodeAddressFurigana.count).to eq(2)

        # 既存データがないことを確認
        expect(ZipCode.find_by(zipcode: '9999999')).to be_nil
        expect(ZipCodeAddress.find_by(pref: '旧都道府県')).to be_nil
        expect(ZipCodeAddressFurigana.find_by(pref: 'キュウトドウフケン')).to be_nil
      end
    end
    context '既存データが存在しない場合' do
      it 'データが正しく登録されること' do
        expect { ZipCode.bulk_insert(data) }.to change { ZipCode.count }.by(2)
        expect(ZipCodeAddress.count).to eq(2)
        expect(ZipCodeAddressFurigana.count).to eq(2)

        first_zip = ZipCode.find_by(zipcode: '1000001')
        expect(first_zip.zip_code_address.city).to eq('千代田区')
        expect(first_zip.zip_code_address_furigana.town).to eq('チヨダ')
      end
    end
  end
end
