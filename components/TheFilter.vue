<template>
    <div class="filter">
        <div class="container">
            <h2><span>FILTER NEWS</span></h2>
            <div class="box">
                <div class="tags">
                    <div class="tag">
                        <span>LIFESTYLE</span>
                        <span class="icon">
                            <fa :icon="['fas', 'times']" />
                        </span>
                    </div>
                    <div class="tag">
                        <span>SPORT</span>
                        <span class="icon">
                            <fa :icon="['fas', 'times']" />
                        </span>
                    </div>
                    <div class="input-box">
                        <input type="text" name="filterTag" />
                    </div>
                </div>
                <button type="button">
                    <span class="icon">
                        <fa :icon="['fas', 'search']" />
                    </span>
                    <span>SEARCH</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheFilter',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.filter {
    h2 {
        font-size: 2.2rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 24px;
        &::before,
        &:after {
            content: '';
            display: inline-block;
            flex-basis: 100%;
            max-width: 100px;
            height: 2px;
            background-color: #000;
        }
        &::before {
            margin-right: 12px;
        }
        &::after {
            margin-left: 12px;
        }
        span {
            flex-shrink: 0;
        }
    }
    .box {
        border: 1px solid #ddd;
        display: flex;
        padding: 4px;
        .tags {
            display: flex;
            flex-basis: 100%;
            @include media(375) {
                flex-wrap: wrap;
            }
        }
        .tag {
            border: 2px solid map-get($color, main);
            display: flex;
            justify-content: center;
            align-items: center;
            color: map-get($color, main);
            padding: 0 8px;
            margin-left: 8px;
            @include media(375) {
                padding: 8px;
                margin-left: 0px;
                margin-bottom: 8px;
            }
            span {
                font-size: 1.4rem;
                font-weight: 700;
            }
            .icon {
                margin-left: 8px;
                &:hover {
                    color: #000;
                }
            }
        }
        .input-box {
            flex-basis: 100%;
            margin-right: 8px;
        }
        input {
            width: 100%;
            height: 100%;
            padding: 12px 4px;
            outline: none;
            font-size: 1.6rem;
            border: 0;
        }
        button {
            border: 0;
            border-radius: 4px;
            background-color: map-get($color, main);
            color: #fff;
            font-weight: 600;
            flex-basis: 140px;
            flex-shrink: 0;
            font-size: 1.4rem;
            cursor: pointer;
            @include media(375) {
                align-self: center;
                padding: 16px 0;
            }
            &:hover {
                background-color: #000;
            }
            .icon {
                margin-right: 4px;
            }
        }
    }
}
</style>
