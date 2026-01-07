class ZipCodeSerializer
  include ActiveModel::Serializers::JSON

  attr_reader :record

  def initialize(record)
    @record = record
  end

  def attributes
    {
      zip_code: zip_code,
      address: address,
      update_time: update_time
    }
  end

  def zip_code
    @record.zipcode.to_s.gsub(/(\d{3})(\d{4})/, '\1-\2')
  end

  def address
    address = @record.zip_code_address
    furigana = @record.zip_code_address_furigana

    {
      pref: address&.pref,
      pref_furigana: furigana&.pref,
      city: address&.city,
      city_furigana: furigana&.city,
      town: address&.town,
      town_furigana: furigana&.town
    }
  end

  def update_time
    @record.zip_code_address&.updated_at
  end
end
