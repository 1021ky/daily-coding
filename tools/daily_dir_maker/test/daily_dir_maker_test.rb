# frozen_string_literal: true

require 'minitest/autorun'
require_relative "test_helper"

describe DailyDirMaker do

  describe "ディレクトリがなかった場合" do
    after 'clean dir' do
      Dir.delete '2025-03-12' if Dir.exist? '2025-03-12'
    end
    it "ディレクトリが作られること" do
      Time.stub(:now, Time.new(2025, 3, 12)) do
        DailyDirMaker.make
      end

      dirs = Dir.children('.')
      _(dirs).must_include "2025-03-12"
    end
  end

  describe "既にディレクトリが作成されていた場合" do
    target_dir = '2025-03-13'
    before 'ディレクトリを作成する' do
      Dir.mkdir target_dir
    end
    after 'ディレクトリを削除する' do
      Dir.delete target_dir
    end
    it "ディレクトリが既に作成されていると標準エラー出力でわかること" do
      _stdout, stderr = capture_io do
        Time.stub(:now, Time.new(2025, 3, 13)) do
          DailyDirMaker.make
        end
      end
      _(stderr).must_equal "2025-03-13 already exists.\n"
    end
  end
end