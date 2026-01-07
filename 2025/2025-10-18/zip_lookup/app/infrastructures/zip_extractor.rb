#
# ZIPファイルからCSVを抽出する
#
module ZipExtractor
  EXTRACTED_FILE_DIR = Rails.root.join("tmp", "zipdata").freeze
  module_function

  #
  # ZIP形式のデータからCSVを抽出する
  #
  #
  # @param [String] zip_format_data ZIP形式のデータ
  # @param [String] write_file_name 抽出後のCSVファイル名
  #
  # @return [String] 抽出されたCSVデータのパス
  #
  def extract_csv(zip_format_data, write_file_name:)
    unless Dir.exist?(EXTRACTED_FILE_DIR)
      FileUtils.mkdir_p(EXTRACTED_FILE_DIR)
    else
      FileUtils.rm_rf(Dir.glob("#{EXTRACTED_FILE_DIR}/*"))
    end

    File.open(EXTRACTED_FILE_DIR.join(write_file_name), "wb") do |f|
      Zip::File.open_buffer(zip_format_data) do |zip|
        entry = zip.glob("**/*#{write_file_name}").first || zip.first
        raise "CSV not found in zip" unless entry
        f.write(entry.get_input_stream.read)
      end
    end
  end
end
