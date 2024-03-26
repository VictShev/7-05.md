Feature: To book a ticket
    Scenario: Book one ticket
        Given user is on "/index.php" page
        When user selects a time
        When user selects a place
        When user presses the register button
        When user presses the button to get the code
        Then user sees the QR of the booked ticket on the page "https://qamid.tmweb.ru/client/ticket.php"

    Scenario: Book multiple tickets
        Given user is on "/index.php" page
        When user selects a time
        When user selects a place 1
        When user selects a place 2
        When user selects a place 3
        When user presses the register button
        When user presses the button to get the code
        Then user sees the QR of the booked ticket on the page "https://qamid.tmweb.ru/client/ticket.php"

    Scenario: The book button is not available
        Given user is on "/index.php" page
        When user presses the register button
        Then user sees the QR of the booked ticket on the page "https://qamid.tmweb.ru/client/hall.php"