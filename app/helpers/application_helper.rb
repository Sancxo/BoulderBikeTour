module ApplicationHelper
    # Returns .active class to nav link with given path
    def set_active(path)
        current_page?(path) ? "active" : ""
    end
end
