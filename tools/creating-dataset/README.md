# aws_azure-comparison / creating-dataset
Tooling to check the performance of AWS and Azure technologies for common payloads used in Gemstone.

Used https://json-generator.com/# to generate JSON for these files.

s3 folder created

Performance-test - storage class "Standard"
https://gemstone-swagger-bucket.s3.amazonaws.com/performance-test/100k.json

Performance-testSSE - storage class "Standard" - Amazon S3 key
https://gemstone-swagger-bucket.s3.amazonaws.com/performance-testSSE/100k.json

CloudFront no WAF
https://d6mxbib8p5eoc.cloudfront.net/performance-test/100k.gz.json

CloudFront WAF + Origin access identity
https://ddymvusslytn3.cloudfront.net/performance-test/100k.gz.json

API Gateway - Edge Optimized
https://506xmpl0z7.execute-api.us-east-1.amazonaws.com/test/performance-test/100k.json

https://506xmpl0z7.execute-api.us-east-1.amazonaws.com/test-waf/performance-test/100k.json

https://506xmpl0z7.execute-api.us-east-1.amazonaws.com/test-cache/performance-test/100k.json