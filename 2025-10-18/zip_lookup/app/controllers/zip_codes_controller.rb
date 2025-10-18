class ZipCodesController < ApplicationController
  def show
    zip_code = ZipCode.includes(:zip_code_address, :zip_code_address_furigana).find_by(zipcode: params[:code])
    return head :not_found unless zip_code

    render json: ZipCodeSerializer.new(zip_code).serializable_hash
  end
end
