# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|name|string|null: false, index: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through:  :groups_users
- has_many :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user|references|null: false, foreign_key: true|
|group|references|null:false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|name|string|null: false|

### Association
- has_many : users, through:  :groups_users
- has_many : messages
- has_many : groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user