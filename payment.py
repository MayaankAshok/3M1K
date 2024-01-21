import requests

def pay_in(phone_num , email , name,link_purpose):

    url = "https://sandbox.cashfree.com/pg/links"

    payload = {
        "customer_details": {
            "customer_phone": str(phone_num),
            "customer_email": email,
            "customer_name": name
        },
        "link_notify": {
            "send_email": True,
            "send_sms": True
        },
        "link_id": "my_link_hdwdfgrfbh", # custom_id_by_us_ # have to be changed for every time a new link is to be generated
        "link_amount": 100,
        "link_currency": "INR",
        "link_purpose": link_purpose # assigment name , course
    }
    headers = {
        "accept": "application/json",
        "x-api-version": "2022-09-01",
        "content-type": "application/json",
        "x-client-id": "TEST101156585d0338a9cdd61bd60bd685651101",
        "x-client-secret": "cfsk_ma_test_b00ff23f02f6ff7419a6750b7cae50c8_53b570bb" # the keys are fine
    }

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)



def pay_out(amount,name,email,phone_num,remarks):


    url = "https://payout-gamma.cashfree.com/payout/v1/createCashgram"

    payload = {
        "cashgramId": "JOHaNdgjefjve10",
        "amount": amount,
        "name": name,
        "email": email,
        "phone": str(phone_num),
        "linkExpiry": "2024/02/03",
        "remarks": remarks,
        "notifyCustomer": 1
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6IkNGMjAyNjBDTDBFM00wSk81UktTN0tPRzA1RyIsImFjY291bnRJZCI6NDc0NTI5LCJzaWduYXR1cmVDaGVjayI6ZmFsc2UsImlwIjoiIiwiYWdlbnQiOiJQQVlPVVQiLCJjaGFubmVsIjoiIiwiYWdlbnRJZCI6NDc0NTI5LCJraWQiOiJiVTRiZ0tObEV1Q3ZpMjMwZlRsY0JBWWF2eXpEUEpLTSIsImVuYWJsZUFwaSI6dHJ1ZSwiZXhwIjoxNzA1ODE1ODgwLCJpYXQiOjE3MDU4MTUyODAsInN1YiI6IlBBWU9VVEFQSV9BVVRIIn0.aQ7BVQsPGrxoUXqJN_wNnhoh3jWXW66LzaEZtwLHaHs_Q5L57vw09yGg3QCv0vVe "
    }

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)


pay_in(6353637373,'kavish2345@gmail.com','kavish','showing')





