## Cài đặt iBoot

- Cài đặt gói core
```
- Cách 1: composer require iboot/core:main-dev
- Cách 2: cd packages && git clone git@github.com:technology-net/core.git
```

- Thhêm service provider vào app.config
```
IBoot\Core\App\Providers\CoreServiceProvider::class,
```
