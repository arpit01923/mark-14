# Profit Loss

## List of Contents
- Description
- Input
- Processing
- Output
- Link


> **Description:** Check profit earned or loss gained on stocks bought. Enter required inputs stated below, click on `Check` button and get to know outcome of your bet. App output section theme get's changed on basis of percentage of profit earned or loss gained.

<br>

> **Input:** The user has to enter input three times, first stocks buying 
price, second number of stocks bought and last current or today's price of stock. User is only allowed to enter positive numbers, quantity cannot be in fractions. If wrong input entered by user, will get informed with message.

<br>

> **Output:** Profit earned or Loss gained in absolute number and percentage as well. If in case no profit or loss, then output section color get changed to message no pain no gain.

<br>

> **Processing:** 
>> - Get stocks buying price and check if zero or negative number, if not then move next, else update user.
>> - Get number of stocks, check is zero, negative number, if not then move next, else update user.
>> - Get stocks today's price and procedure repeated same as for stocks buying price.
>> - If every check passed, update the user with outcome and update the output section.
>> - Profit and Loss will be output in div section.
>> - Profit percentage is calculated as <strong>Profit Percentage = (Profit/CostPrice)*100</strong>
>> - Loss percentage is calculated as <strong>Loss Percentage = (Loss/CostPrice)*100</strong>
 
<br>

> **Link:**  [Profit Loss](https://arpit-profit-loss.netlify.app/)
