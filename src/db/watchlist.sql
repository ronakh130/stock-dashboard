CREATE TABLE watchlist (
    stock_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    symbol VARCHAR(4) NOT NULL,
    displayName VARCHAR(255) NOT NULL,
    currentPrice DECIMAL(10, 2) NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_stock ON watchlist(user_id, stock_id);



-- If you were to have multiple users:

CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    -- Add other user-related columns as needed
);

CREATE TABLE stocks (
    stock_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    symbol VARCHAR(4) NOT NULL,
    displayName VARCHAR(255) NOT NULL,
    currentPrice DECIMAL(10, 2) NOT NULL,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user_stocks (
    user_id UUID,
    stock_id UUID,
    PRIMARY KEY (user_id, stock_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (stock_id) REFERENCES stocks(stock_id)
);

CREATE INDEX idx_user_stock ON user_stocks(user_id, stock_id);
