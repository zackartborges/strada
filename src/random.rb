require 'rails_helper'

describe 'Device', type: :request do
  HEADERS = {
    'HTTP_ACCEPT' => 'application/json'
    # 'guardian-id' => 'FAKE_ID',
    # 'guardian-key' => 'FAKE_KEY'
  }.freeze

  # need to include an accept value in the header (expecting http_accept but http_ is prepended automatically. Try http_accept first. value of header should be application/json
  describe 'post /api/vitals' do
    let!(:organization) {Organization.create!(id: SecureRandom.uuid, name: "Demo Health [test]" )}
    let!(:device) {Device.create!(organization: organization )}
    let(:params) do
      {
        'vitals' => {
          '__blank_image' => false,
          'bloodPressure' => [
            120,
            80
          ],
          'heartRate' => 80,
          'oxygen' => 95,
          'co2' => 30
        }
      }
    end

    let(:request) {post vitals_path, headers: HEADERS, params: params
    }
    before do
      allow(Device).to receive(:find_by).and_return(device)
      allow(CleanVitals).to receive(:clean).and_return({foo: :bar})
      allow(Rails.logger).to receive(:info)
    end

    it 'Logs vitals to rails logger' do
      request

      expect(Rails.logger).to have_received(:info).with("vitals: {:foo=>:bar}")
    end

    context 'When there is a device and there is clean vitals' do
      it 'Updates vitals' do
        expect{request}.to change(device, :last_vital_at).from(nil).to(Time.current)
      end

      it 'Renders response' do
      end
    end

    context 'If there is not an operating room' do
      it 'Renders a bad request' do
      end
    end

    context 'If there is not clean vitals' do
      it 'Renders a bad request' do
      end
    end

    it 'Displays AOIs for patients vitals' do
    end
  end
end







require 'rails_helper'

describe 'Device', type: :request do
  HEADERS = {
    'HTTP_ACCEPT' => 'application/json'
  }
  # need to include an accept value in the header (expecting http_accept but http_ is prepended automatically. Try http_accept first. value of header should be application/json
  describe 'post /api/vitals' do
    let(:params) do
      {
        'vitals' => {
          '__blank_image' => false,
          'bloodPressure' => [
            120,
            80
          ],
          'heartRate' => 80,
          'oxygen' => 95,
          'co2' => 30
        }
      }
    end

    let(:request) {post vitals_path, headers: HEADERS, params: params
    }

    it 'Logs vitals to rails logger' do
      request

      expect(Rails.logger).to have_received(:info).with("vitals: {:hey=>:hello}")
    end

    context 'When there is a device and there is clean vitals' do
      it 'Updates vitals' do
      end

      it 'Renders response' do
      end
    end

    context 'If there is not an operating room' do
      it 'Renders a bad request' do
      end
    end

    context 'If there is not clean vitals' do
      it 'Renders a bad request' do
      end
    end

    it 'Returns AOIs for patients vitals' do
    end
  end
end







require 'rails_helper'

describe 'Device', type: :request do
  HEADERS = {
    'HTTP_ACCEPT' => 'application/json'
  }.freeze

  # need to include an accept value in the header (expecting http_accept but http_ is prepended automatically. Try http_accept first. value of header should be application/json
  describe 'post /api/vitals' do
    let!(:organization) {Organization.create!(id: SecureRandom.uuid, name: "Demo Health [test]" )}
    let!(:device) {Device.create!(organization: organization )}
    let(:params) do
      {
        'vitals' => {
          '__blank_image' => false,
          'bloodPressure' => [
            120,
            80
          ],
          'heartRate' => 80,
          'oxygen' => 95,
          'co2' => 30
        }
      }
    end

    let(:request) {post vitals_path, headers: HEADERS, params: params
    }
    before do
      allow(Device).to receive(:find_by).and_return(device)
      allow(CleanVitals).to receive(:clean).and_return({foo: :bar})
      # allow(Rails.logger).to receive(:info)
    end

    it 'Should Log vitals to rails logger' do
      request

      expect(Rails.logger).to have_received(:info).with("vitals: {:foo=>:bar}")
    end

    context 'When there is a device and there is clean vitals' do
      it 'Should update vitals' do
        expect{ request }.to change(device, :last_vital_at).from(nil).to(Time.current)
      end

      it 'Should render a response' do
      end
    end

    context 'If there is not an operating room' do
      it 'Should render a bad request' do
      end
    end

    context 'If there is not clean vitals' do
      it 'Should renders a bad request' do
      end
    end

    it 'Should display AOIs for patients vitals' do
    end
  end
end




apr 26
require 'rails_helper'

describe 'Device', type: :request do
  HEADERS = {
    'HTTP_ACCEPT' => 'application/json'
  }

  # need to include an accept value in the header (expecting http_accept but http_ is prepended automatically. Try http_accept first. value of header should be application/json
  describe 'post /api/vitals' do

    let(:operating_room) do
      instance_double( 'OperatingRoom',
        vitals: {
          "__blank_image" => false,
          "bloodPressure" => [
            120,
            80
          ],
         "heartRate" => 80,
         "oxygen" => 95,
         "co2" => 30
      })
      # id: 'operating-room-id',
      # name: 'OR 1',
      # facility_id: facility.id
    end

    let(:device) do
      instance_double('Device',
        operating_room: operating_room,
        last_vital_at: nil,
        aois: [{
          x: 890,
          y: 100,
          w: 190,
          h: 140,
          allowedCharacters: '0123456789',
          name: 'heartRate',
          id: 'dpm6-hr1'
        }])
    end
    # let!(:redis) { Redis.create!(url: 'TEST_URL') }

    let(:params) do
      {
        'vitals' => {
          '__blank_image' => false,
          'bloodPressure' => [
            120,
            80
          ],
          'heartRate' => 80,
          'oxygen' => 95,
          'co2' => 30
        }
      }
    end

    let(:request) do
      post vitals_path, headers: HEADERS, params: params
    end
    before do
      allow(Device).to receive(:find_by).and_return(device)
      allow(CleanVitals).to receive(:clean).and_return({ hey: :hello })
      allow(Rails.logger).to receive(:info)
    end

    it ' Log vitals to rails logger' do
      request

      expect(Rails.logger).to have_received(:info).with('vitals: {:hey=>:hello}')
    end

    context 'When the device has an operating room and there is clean vitals' do
      it ' update vitals' do
        allow(operating_room).to receive(:update!)

        expect(device).to receive(:update!).with(last_vital_at: a_kind_of(Time))
        # expect(device).to change(device, :last_vital_at).from(nil).to(Time.current)
        request
      end

      it 'Render a response' do
        
        expect(response)
      end
    end

    context 'If there is not an operating room' do
      it 'Render a bad request' do
      end
    end

    context 'If there is not clean vitals' do
      it 'Renders a bad request' do
      end
    end

    it 'Display AOIs for patients vitals' do
    end
  end
end
