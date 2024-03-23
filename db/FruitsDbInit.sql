CREATE TABLE Fruits
(
  Id uniqueidentifier NOT NULL DEFAULT newid(),
  FruitName VARCHAR(255) NOT NULL,
  FruitType VARCHAR(255) NOT NULL,
  FruitImage varbinary(max)
)

INSERT INTO Fruits (FruitName, FruitType, FruitImage)
VALUES
('ananas', 'domestic', ''),
('apple', 'domestic',''),
('aubergine', 'domestic',''),
('banana', 'domestic',''),
('birne', 'domestic',''),
('coconut', 'domestic',''),
('dates', 'domestic',''),
('kiwi', 'domestic',''),
('mango', 'domestic',''),
('melone', 'domestic',''),
('nectarine', 'domestic',''),
('olives', 'domestic',''),
('orange', 'domestic',''),
('rambutan', 'domestic',''),
('strawberry', 'domestic','')


