#
# 日本郵便が提供する郵便番号データのZIPファイルからCSVを抽出する
#
class ZipdataExtractor
  CSV_FILE_PATH = Rails.root.join('tmp', 'zipdata').freeze
  #
  # コンストラクタ
  #
  # @param [String] csv_file_path 抽出したCSVファイルを置くファイルパス
  #
  def initialize(csv_file_path: CSV_FILE_PATH)
    @csv_file_path = csv_file_path
  end

  #
  # ZIP形式のデータからCSVを抽出する
  #
  # @param [String] zip_format_data ZIP形式のデータ
  #
  # @return [String] 抽出されたCSVデータのパス
  #
  def extract(zip_format_data)
    unless Dir.exist?(@csv_file_path)
      FileUtils.mkdir_p(@csv_file_path)
    else
      FileUtils.rm_rf(Dir.glob("#{@csv_file_path}/*"))
    end

    File.open(@csv_file_path.join('ken_all.csv'), 'wb') do |f|
      Zip::File.open_buffer(zip_format_data) do |zip|
        entry = zip.glob('**/*ken_all*.csv').first || zip.first
        raise "CSV not found in zip" unless entry
        f.write(entry.get_input_stream.read)
      end
    end
  end
end