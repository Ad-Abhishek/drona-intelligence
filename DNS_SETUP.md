# DNS Configuration for Custom Domain

## DNS Records to Add in Spaceship Panel

### Option 1: Using CNAME (Recommended for subdomains)
If you want to use `www.dronaintelligence.com`:

```
Type: CNAME
Name: www
Value: ad-abhishek.github.io
TTL: 3600 (or Auto)
```

### Option 2: Using A Records (For apex domain)
If you want to use `dronaintelligence.com` (without www):

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank for root domain)  
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.111.153
TTL: 3600
```

### Option 3: Both (Recommended)
Set up both www and apex domain:

**For apex domain (dronaintelligence.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: ad-abhishek.github.io
```

## Steps to Configure:

1. **Login to Spaceship**: Go to your Spaceship account
2. **Find DNS Management**: Look for "DNS" or "Domain Management" 
3. **Add Records**: Add the DNS records above
4. **Wait for Propagation**: DNS changes can take 24-48 hours to fully propagate

## Verify DNS Setup:
You can check if DNS is working using online tools:
- https://dnschecker.org/
- https://www.whatsmydns.net/

Enter your domain and check if it resolves to GitHub's IP addresses.