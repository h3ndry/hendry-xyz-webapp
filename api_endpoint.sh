base_url=http://localhost:1337/api


curl "$base_url/posts" | jq

curl -g "$base_url/posts?filters[slug][$eq]=post-1" | jq

curl "$base_url/about-page" | jq

curl "$base_url/projects?populate=*" | jq
