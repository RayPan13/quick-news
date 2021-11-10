<template>
    <footer>
        <div class="container">
            <div class="social">
                <ul>
                    <li v-for="obj of socialAry" :key="obj.name">
                        <a :href="obj.url">{{ obj.name }}</a>
                        <fa :icon="[obj.icon[0], obj.icon[1]]" />
                    </li>
                </ul>
            </div>
            <div class="info">
                <div class="item">
                    <div class="logo">
                        <a href="javascript:;">home</a>
                        <span>Quick</span>News<span>.</span>
                    </div>
                    <div class="desc">
                        <p>
                            Quick News is an iconic design and visual news brand encompassing a venerated magazine, a
                            <a href="javascript:;">website</a>
                            , one of the most well-respected online magazine petitions in the industry.
                        </p>
                    </div>
                    <a href="javascript:;" class="more">MORE</a>
                </div>
                <div class="item">
                    <div class="title">
                        <h4>POPULAR CATEGORIES</h4>
                        <span></span>
                    </div>
                    <ul>
                        <li v-for="obj of popularAry" :key="obj.name">
                            <a :href="obj.url">{{ obj.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="title">
                        <h4>IN CASE YOU MISSED IT</h4>
                        <span></span>
                    </div>
                    <div v-for="obj of caseAry" :key="obj.title" class="case">
                        <p>
                            {{ obj.title }}
                            <a :href="obj.url">More >></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'TheFooter',
    data() {
        return {
            socialAry: [
                { url: 'javascript:;', icon: ['fab', 'facebook-f'], name: 'fb' },
                { url: 'javascript:;', icon: ['fas', 'rss'], name: 'ree' },
                { url: 'javascript:;', icon: ['fab', 'twitter'], name: 'twitter' },
                { url: 'javascript:;', icon: ['fab', 'linkedin-in'], name: 'linked' },
                { url: 'javascript:;', icon: ['fab', 'youtube'], name: 'youtueb' },
                { url: 'javascript:;', icon: ['fas', 'basketball-ball'], name: 'basketball' },
            ],
            popularAry: [
                { url: 'javascript:;', name: 'Health' },
                { url: 'javascript:;', name: 'Action' },
                { url: 'javascript:;', name: 'Culture' },
                { url: 'javascript:;', name: 'Travel' },
                { url: 'javascript:;', name: 'Adventure' },
                { url: 'javascript:;', name: 'Tech' },
                { url: 'javascript:;', name: 'Sports' },
            ],
            caseAry: [
                { url: 'javascript:;', title: 'Top 7 Best Car Racing Games for PC, PS4 and XBOX One in 2017.' },
                { url: 'javascript:;', title: 'Top 7 Best Car Racing Games for PC, PS4 and XBOX One in 2017.' },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
footer {
    width: 100%;
    background-color: #000;
    padding: 48px 0 12px;
    .social {
        width: 100%;
        margin-bottom: 48px;
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li {
            list-style: none;
            position: relative;
            font-size: 2.4rem;
            color: #fff;
            padding: 8px;
            margin-right: 8px;
            &:hover {
                color: map-get($color, main);
            }
            &:last-child {
                margin-right: 0;
            }
        }
        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-size: 0;
        }
    }
    .info {
        display: flex;
        margin-bottom: 32px;
        @include media(768) {
            flex-wrap: wrap;
        }
        .item {
            flex-basis: 100%;
            padding-right: 24px;
            @include media(768) {
                padding-right: 0;
                margin-bottom: 24px;
            }
        }
        .logo {
            position: relative;
            color: #fff;
            font-size: 2rem;
            margin-bottom: 24px;
            a {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                font-size: 0;
            }
            span {
                color: map-get($color, main);
            }
        }
        .desc {
            margin-bottom: 24px;
        }
        p {
            font-size: 1.3rem;
            line-height: 1.5;
            color: #ababab;
            margin: 0;
            a {
                color: map-get($color, main);
                &:hover {
                    color: #e7e7e7;
                }
            }
        }
        .more {
            font-size: 1.4rem;
            font-weight: 600;
            display: inline-block;
            color: #fff;
            background-color: map-get($color, main);
            padding: 16px 24px;
            border-radius: 4px;
            transition: background 0.5s;
            &:hover {
                background-color: #000;
            }
        }
        .title {
            display: flex;
            align-items: center;
            margin: 0 0 24px;
            h4 {
                margin: 0;
                display: inline-block;
                color: #fff;
                font-size: 1.4rem;
                font-weight: 600;
                white-space: nowrap;
            }
            span {
                flex-basis: 100%;
                height: 2px;
                background-color: #fff;
                margin-left: 12px;
                max-width: 100px;
            }
        }
        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
        }
        li {
            flex-basis: 33.33%;
            margin-bottom: 12px;
            a {
                color: #ababab;
                font-size: 1.3rem;
                &:hover {
                    color: #e7e7e7;
                }
            }
        }
        .case {
            border-top: 1px solid #646464;
            padding: 24px 0;
            p {
                color: #fff;
            }
            &:last-child {
                border-bottom: 1px solid #646464;
            }
        }
    }
    .copyright {
        color: #979797;
    }
}
</style>
