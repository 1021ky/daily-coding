class ZipCodesController < ApplicationController
  def show
    zip_code = ZipCode.includes(:zip_code_address, :zip_code_address_furigana).find_by(zipcode: params[:zip_code])
    return head :not_found unless zip_code

    render json: ZipCodeSerializer.new(zip_code).serializable_hash
  end

  private

  def zip_code_param
    params.require(:zip_code)
  end

  def render_bad_request(_error = nil)
    render json: { message: '郵便番号の指定に誤りがあります' }, status: :bad_request
  end
end
