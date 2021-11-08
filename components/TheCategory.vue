<template>
    <div class="category">
        <div class="container">
            <h2>Sport News</h2>
            <div class="left">
                <div class="item big">
                    <div class="pic">
                        <a href="javascript:;"></a>
                        <div class="tag">SPORT</div>
                        <img src="https://picsum.photos/1050/330.webp?random=201" alt="" />
                    </div>
                    <div class="txt">
                        <h3>
                            <a href="javsscript:;">
                                25 Top Tourist Attractions in the United Kingdom, in summer 2019 Year
                            </a>
                        </h3>
                        <div class="info">
                            <div class="date">
                                <span class="icon">
                                    <fa :icon="['far', 'calendar']" />
                                </span>
                                <span>3 min ago</span>
                            </div>
                            <div class="author">
                                <span class="icon">
                                    <fa :icon="['far', 'user']" />
                                </span>
                                <span>John Adams</span>
                            </div>
                            <div class="views">
                                <span class="icon">
                                    <fa :icon="['far', 'eye']" />
                                </span>
                                <span>932 views</span>
                            </div>
                            <div class="comments">
                                <span class="icon">
                                    <fa :icon="['far', 'comment']" />
                                </span>
                                <span>2 comments</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="pic">
                        <a href="javascript:;"></a>
                        <div class="tag">SPORT</div>
                        <img src="https://picsum.photos/500/333.webp?random=202" alt="" />
                    </div>
                    <div class="txt">
                        <h3>
                            <a href="javsscript:;"> 10 Interior Tips In How to Choose a Perfect Frame </a>
                        </h3>
                        <div class="info">
                            <div class="date">
                                <span class="icon">
                                    <fa :icon="['far', 'calendar']" />
                                </span>
                                <span>3 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item video">
                    <div class="pic">
                        <a href="javascript:;"></a>
                        <div class="tag">SPORT</div>
                        <div class="play-btn">
                            <span class="icon">
                                <fa :icon="['fas', 'play']" />
                            </span>
                            <span>PLAY</span>
                        </div>
                        <img src="https://picsum.photos/430/430.webp?random=203" alt="" />
                    </div>
                    <div class="txt">
                        <div class="info">
                            <div class="date">
                                <span class="icon">
                                    <fa :icon="['far', 'calendar']" />
                                </span>
                                <span>3 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="item">
                    <div class="pic">
                        <a href="javascript:;"></a>
                        <div class="tag">SPORT</div>
                        <img src="https://picsum.photos/368/640.webp?random=204" alt="" />
                    </div>
                    <div class="txt">
                        <h3>
                            <a href="javsscript:;">Manchester United hopeful David de Gea will sign new contract</a>
                        </h3>
                        <div class="info">
                            <div class="date">
                                <span class="icon">
                                    <fa :icon="['far', 'calendar']" />
                                </span>
                                <span>3 min ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more">
                <a href="javascript:;">
                    <span>ALL SPORT NEWS</span>
                    <span class="icon">
                        <fa :icon="['fas', 'angle-right']" />
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheCategory',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.category {
    width: 100%;
    margin-bottom: 32px;
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    h2 {
        font-size: 5rem;
        font-weight: 700;
        margin: 0 0 24px;
        flex-basis: 100%;
    }
    .left {
        flex-basis: 70%;
        display: flex;
        flex-wrap: wrap;
        padding-right: 32px;
        @include media(768) {
            flex-basis: 100%;
            padding-right: 0;
        }
        .item {
            flex-basis: 50%;
            @include media(768) {
                flex-basis: 100%;
            }
            &.big {
                flex-basis: 100%;
            }
            &.video {
                padding-left: 32px;
                @include media(768) {
                    padding-left: 0;
                }
            }
        }
    }
    .right {
        flex-basis: 30%;
        @include media(768) {
            flex-basis: 100%;
        }
    }
    .item {
        flex-basis: 100%;
        margin-bottom: 32px;
        .pic {
            width: 100%;
            position: relative;
            margin-bottom: 12px;
            overflow: hidden;
            a {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 3;
                &:hover ~ img {
                    transform: scale(1.2);
                }
            }
            img {
                transform: scale(1);
                transform-origin: center;
                transition-duration: 0.5s;
                width: 100%;
            }
            .tag {
                background-color: rgba(map-get($color, main), 0.7);
                color: #fff;
                position: absolute;
                top: 8px;
                right: 8px;
                padding: 12px;
                border-radius: 4px;
                z-index: 2;
                font-weight: 600;
            }
            .play-btn {
                position: absolute;
                left: 20px;
                bottom: 20px;
                color: #fff;
                font-size: 1.2rem;
                font-weight: 600;
                z-index: 2;
                .icon {
                    margin-right: 4px;
                }
            }
        }
        h3 {
            padding-bottom: 12px;
            margin: 0 0 12px;
            font-size: 2rem;
            border-bottom: 1px solid #ddd;
            transition: color 0.5s;
            &:hover {
                color: map-get($color, main);
            }
        }
        .info {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 12px;
            font-size: 1.4rem;
            .icon {
                margin-right: 4px;
            }
            > div {
                margin: 0 12px 12px 0;
            }
        }
    }
    .more {
        flex-basis: 100%;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 600;
        a:hover {
            opacity: 0.5;
        }
        .icon {
            margin-left: 4px;
        }
    }
}
</style>
