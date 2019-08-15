require 'test_helper'

class Api::V1::CalorieEntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_v1_calorie_entry = api_v1_calorie_entries(:one)
  end

  test "should get index" do
    get api_v1_calorie_entries_url, as: :json
    assert_response :success
  end

  test "should create api_v1_calorie_entry" do
    assert_difference('Api::V1::CalorieEntry.count') do
      post api_v1_calorie_entries_url, params: { api_v1_calorie_entry: { calorie: @api_v1_calorie_entry.calorie, note: @api_v1_calorie_entry.note } }, as: :json
    end

    assert_response 201
  end

  test "should show api_v1_calorie_entry" do
    get api_v1_calorie_entry_url(@api_v1_calorie_entry), as: :json
    assert_response :success
  end

  test "should update api_v1_calorie_entry" do
    patch api_v1_calorie_entry_url(@api_v1_calorie_entry), params: { api_v1_calorie_entry: { calorie: @api_v1_calorie_entry.calorie, note: @api_v1_calorie_entry.note } }, as: :json
    assert_response 200
  end

  test "should destroy api_v1_calorie_entry" do
    assert_difference('Api::V1::CalorieEntry.count', -1) do
      delete api_v1_calorie_entry_url(@api_v1_calorie_entry), as: :json
    end

    assert_response 204
  end
end
