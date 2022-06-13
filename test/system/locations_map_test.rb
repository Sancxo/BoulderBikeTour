require "application_system_test_case"

class SiteTest < ApplicationSystemTestCase
    test 'homepage displays JS time counter' do
        visit root_url
        assert_selector 'div[data-controller="counter"] p[data-counter-target="counter"]', 
            text: "Race begins in"
    end

    test 'photos displays Flicker API data and a modal' do
        visit photos_url
        # checks if there is at least one img tag whose src attribute starts with "https://live.staticflickr.com"
        assert_selector 'img[src^="https://live.staticflickr.com"]'

        click_on 'img[src^="https://live.staticflickr.com"]'
        # checks if modal has "display: block" inside "style" attribute
        assert_selector 'div[style*="display: block"]'
        # click on close cross
        click_on '.btn-close'
        # checks if modal is now "display: none"
        assert_no_selector 'div.modal'

        click_on 'img[src^="https://live.staticflickr.com"]'
        # checks if modal has "show" class
        assert_selector 'div.modal.show'
        # clicks on button "Close"
        click_on "Close"
        # checks if modal is now "display: none"
        assert_no_selector 'div.modal.show'
    end

    test 'locations page displays riders markers' do
        # runs Riders seeds
        load "#{Rails.root}/db/seeds.rb"

        visit locations_url
        # checks if map is on page
        assert_selector '#map'
        # checks if at least one marker is created
        page.assert_selector('.leaflet-marker-icon')
        # clicks on it
        first('.leaflet-marker-icon').click
        # checks for marker popup
        page.assert_selector('.leaflet-popup-content-wrapper')
        first('.leaflet-popup-close-button').click
        page.assert_no_selector('.leaflet-popup-content-wrapper')
    end
end