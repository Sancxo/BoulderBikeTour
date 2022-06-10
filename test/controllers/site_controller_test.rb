require "test_helper"

class SiteControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  test "should get homepage" do
    get root_url
    assert_response :success
  end

  test "should get photos page" do
    get photos_url
    assert_response :success
  end

  test "should get riders page" do
    get riders_url
    assert_response :success
  end  

  test "should get locations page" do
    get locations_url
    assert_response :success
  end

  test "should get contest page" do
    get submissions_url
    assert_response :success
  end

  test "should create submission" do
    assert_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: 'This is my test, for sure!'}}
    end

    assert_redirected_to submissions_url
  end

  test "should create submission even if email confirmation is uppercase" do
    assert_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'TEST@TEST.TEST', slogan: 'This is my test, for sure!'}}
    end

    assert_redirected_to submissions_url
  end

  test "should not create submission because of bad email format" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test.test', email_confirmation: 'test.test', slogan: 'This is my test, for sure!'}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because of missing first_name" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: '', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: 'This is my test, for sure!'}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because of missing last_name" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: '', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: 'This is my test, for sure!'}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because of missing slogan" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: ''}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because of too short slogan" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: 'Y'}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because of too long slogan" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.test', slogan: 'Lorem ipsum dolor sit amet, consectetur adipiscing sed.'}}
    end

    assert_response :unprocessable_entity
  end

  test "should not create submission because email confirmation doesn't match" do
    assert_no_difference('Submission.count') do
      post contest_url, params: {submission: {first_name: 'Test', last_name: 'McTest', email: 'test@test.test', email_confirmation: 'test@test.com', slogan: 'This is a test!'}}
    end
  end
end
