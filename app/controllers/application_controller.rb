class ApplicationController < ActionController::API
  include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

def current_user
    return unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end


    private

    def render_not_found_response(exception_obj)
        render json: { error: "#{exception_obj.model} not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end


  end

end
